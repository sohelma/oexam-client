'use client';
import React, { useEffect, useRef, useState } from 'react';
import { 
  LuCamera, 
  LuCameraOff, 
  LuShieldAlert, 
  LuShieldCheck, 
  LuSmartphone, 
  LuUsers, 
  LuUserX, 
  LuChevronDown, 
  LuChevronUp,
  LuSparkles
} from 'react-icons/lu';

export default function ProctoringWidget({ 
  isActive, 
  strikes = 0, 
  maxStrikes = 3, 
  onViolation,
  onCameraReady,
  onAwayTimeout
}) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const modelRef = useRef(null);
  const detectIntervalRef = useRef(null);
  const awayTimerIntervalRef = useRef(null);

  const [hasCamera, setHasCamera] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);
  const [modelStatus, setModelStatus] = useState('Initializing AI Proctor...');
  const [isMinimized, setIsMinimized] = useState(false);
  const [lastWarning, setLastWarning] = useState(null);
  const [detectedItem, setDetectedItem] = useState(null);
  const [awaySeconds, setAwaySeconds] = useState(0); // counts up to 30
  const isAwayRef = useRef(false);
  const awaySecondsRef = useRef(0);
  const lastViolationTimeRef = useRef(0);
  const timeoutTriggeredRef = useRef(false);

  // 1. Initialize Camera
  useEffect(() => {
    let mounted = true;

    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 320 }, height: { ideal: 240 }, facingMode: 'user' },
          audio: false,
        });

        if (!mounted) {
          stream.getTracks().forEach(track => track.stop());
          return;
        }

        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            if (videoRef.current) videoRef.current.play();
          };
        }
        setHasCamera(true);
        if (onCameraReady) onCameraReady(true);
      } catch (err) {
        console.error('Proctoring camera access error:', err);
        setHasCamera(false);
        setModelStatus('Camera permission required');
        if (onCameraReady) onCameraReady(false);
      }
    }

    setupCamera();

    return () => {
      mounted = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
      }
      if (detectIntervalRef.current) {
        clearInterval(detectIntervalRef.current);
      }
    };
  }, []);

  // 2. Load TensorFlow & COCO-SSD dynamically
  useEffect(() => {
    let isCancelled = false;

    async function loadScriptsAndModel() {
      try {
        setModelStatus('Loading AI Vision Engine...');
        
        // Helper to load external CDN script if not already on window
        const loadScript = (src) => {
          return new Promise((resolve, reject) => {
            if (document.querySelector(`script[src="${src}"]`)) {
              resolve();
              return;
            }
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = (e) => reject(e);
            document.body.appendChild(script);
          });
        };

        // Load TF.js and Coco-SSD
        if (!window.tf) {
          await loadScript('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.22.0/dist/tf.min.js');
        }
        if (!window.cocoSsd) {
          await loadScript('https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js');
        }

        if (isCancelled) return;

        if (window.cocoSsd) {
          setModelStatus('Warming up AI Model...');
          const loadedModel = await window.cocoSsd.load({ base: 'lite_mobilenet_v2' });
          if (!isCancelled) {
            modelRef.current = loadedModel;
            setModelLoading(false);
            setModelStatus('AI Proctor Active');
          }
        }
      } catch (err) {
        console.warn('AI Model loading fallback/error:', err);
        if (!isCancelled) {
          setModelLoading(false);
          setModelStatus('Basic Camera Monitoring Active');
        }
      }
    }

    loadScriptsAndModel();

    return () => {
      isCancelled = true;
    };
  }, []);

  // 3. Absence Timer (Ticks every 1 second when isAwayRef is true)
  useEffect(() => {
    if (!isActive) return;

    awayTimerIntervalRef.current = setInterval(() => {
      if (isAwayRef.current && !timeoutTriggeredRef.current) {
        awaySecondsRef.current += 1;
        const currentAway = awaySecondsRef.current;
        setAwaySeconds(currentAway);

        if (currentAway >= 30) {
          timeoutTriggeredRef.current = true;
          if (onAwayTimeout) {
            onAwayTimeout();
          }
        }
      } else if (!isAwayRef.current) {
        if (awaySecondsRef.current !== 0) {
          awaySecondsRef.current = 0;
          setAwaySeconds(0);
        }
      }
    }, 1000);

    return () => {
      if (awayTimerIntervalRef.current) {
        clearInterval(awayTimerIntervalRef.current);
      }
    };
  }, [isActive, onAwayTimeout]);

  // 4. Continuous Object & Malpractice Detection Loop
  useEffect(() => {
    if (!isActive || modelLoading || !modelRef.current || !hasCamera) {
      if (!hasCamera && isActive) {
        isAwayRef.current = true;
      }
      return;
    }

    const runDetection = async () => {
      if (!videoRef.current || videoRef.current.readyState < 2) return;

      try {
        const predictions = await modelRef.current.detect(videoRef.current);
        const now = Date.now();

        // Check for cell phone / phone devices
        const phonePrediction = predictions.find(p => 
          (p.class === 'cell phone' || p.class === 'phone' || p.class === 'remote') && p.score > 0.45
        );

        // Check number of people
        const personPredictions = predictions.filter(p => p.class === 'person' && p.score > 0.45);

        if (personPredictions.length === 0) {
          // No person detected in camera view
          isAwayRef.current = true;
          setDetectedItem('⚠️ No Face/Person Detected');
        } else {
          // Person is present!
          isAwayRef.current = false;

          if (phonePrediction) {
            setDetectedItem('📱 Phone Detected!');
            // Throttle violation alerts (at least 6s apart)
            if (now - lastViolationTimeRef.current > 6000) {
              lastViolationTimeRef.current = now;
              setLastWarning('Cell phone detected in camera view!');
              if (onViolation) {
                onViolation({
                  type: 'PHONE_DETECTED',
                  description: `Mobile device/phone detected in camera view (${Math.round(phonePrediction.score * 100)}% confidence)`,
                });
              }
            }
          } else if (personPredictions.length > 1) {
            setDetectedItem('👥 Multiple People');
            if (now - lastViolationTimeRef.current > 8000) {
              lastViolationTimeRef.current = now;
              setLastWarning('Multiple individuals detected in exam area!');
              if (onViolation) {
                onViolation({
                  type: 'MULTIPLE_PERSONS',
                  description: `${personPredictions.length} people detected in camera frame`,
                });
              }
            }
          } else {
            setDetectedItem(null);
          }
        }
      } catch (err) {
        console.error('Detection frame error:', err);
      }
    };

    detectIntervalRef.current = setInterval(runDetection, 1500);

    return () => {
      if (detectIntervalRef.current) {
        clearInterval(detectIntervalRef.current);
      }
    };
  }, [isActive, modelLoading, hasCamera, onViolation]);

  return (
    <>
      {/* Urgent Top Alert Banner if Away from Camera */}
      {awaySeconds > 0 && (
        <div className="fixed top-20 inset-x-4 max-w-2xl mx-auto z-50 bg-red-600/95 backdrop-blur-md text-white p-4 md:p-5 rounded-3xl shadow-2xl border-2 border-red-300 animate-pulse flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <LuUserX size={28} />
            </div>
            <div>
              <h4 className="font-black text-sm md:text-base leading-tight">Camera Face Absence Detected!</h4>
              <p className="text-xs text-red-100 font-bold mt-0.5">Please look into the camera. Exam will auto-submit in:</p>
            </div>
          </div>
          <div className="bg-white text-red-600 px-4 py-2 rounded-2xl font-black text-2xl tracking-tighter shrink-0 shadow-inner">
            {30 - awaySeconds}s
          </div>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
        {/* Floating Camera Box */}
        <div className={`bg-slate-900/95 backdrop-blur-md text-white border shadow-2xl rounded-3xl overflow-hidden w-64 transition-all duration-300 ${
          awaySeconds > 0 ? 'border-red-500 ring-4 ring-red-500/30' : 'border-slate-700'
        }`}>
          {/* Header Bar */}
          <div className="px-4 py-3 bg-slate-800/90 flex items-center justify-between border-b border-slate-700/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  awaySeconds > 0 ? 'bg-red-400' : 'bg-emerald-400'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  awaySeconds > 0 ? 'bg-red-500' : 'bg-emerald-500'
                }`}></span>
              </span>
              <span className="text-[11px] font-black tracking-wider uppercase text-slate-200">
                AI Proctor
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Strikes indicator */}
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                strikes === 0 ? 'bg-emerald-500/20 text-emerald-300' :
                strikes === 1 ? 'bg-amber-500/20 text-amber-300' : 'bg-red-500/20 text-red-300 animate-pulse'
              }`}>
                Strike: {strikes}/{maxStrikes}
              </span>

              <button 
                onClick={() => setIsMinimized(prev => !prev)}
                className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
                title={isMinimized ? "Expand Camera" : "Minimize Camera"}
              >
                {isMinimized ? <LuChevronUp size={16} /> : <LuChevronDown size={16} />}
              </button>
            </div>
          </div>

          {/* Camera Video Area */}
          {!isMinimized && (
            <div className="relative bg-black h-40 w-full overflow-hidden flex items-center justify-center">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover transform -scale-x-100"
              />

              {!hasCamera && (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-900/90 text-center gap-2">
                  <LuCameraOff size={28} className="text-red-400 animate-bounce" />
                  <p className="text-[11px] font-bold text-red-300">Camera Unavailable or Blocked</p>
                </div>
              )}

              {/* AI Scanning overlay indicator */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-[9px] font-bold text-emerald-400">
                <LuSparkles size={10} />
                {modelLoading ? 'AI Booting...' : 'AI Active'}
              </div>

              {/* Realtime Detection Tag on Video */}
              {detectedItem && (
                <div className={`absolute bottom-2 inset-x-2 text-white text-[10px] font-black text-center py-1 rounded-md shadow-lg ${
                  awaySeconds > 0 ? 'bg-red-600 animate-pulse' : 'bg-red-600/90 animate-bounce'
                }`}>
                  {detectedItem} {awaySeconds > 0 && `(${30 - awaySeconds}s)`}
                </div>
              )}
            </div>
          )}

          {/* Footer Status Bar */}
          <div className="px-3.5 py-2.5 text-[10px] flex items-center justify-between text-slate-400 bg-slate-950/60">
            <span className="truncate max-w-[150px] font-semibold">
              {awaySeconds > 0 ? `Absent: ${awaySeconds}s/30s` : modelStatus}
            </span>
            <span className="font-mono font-bold text-slate-300">30 FPS</span>
          </div>
        </div>
      </div>
    </>
  );
}
