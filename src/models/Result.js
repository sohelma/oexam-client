import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  answers: [
    {
      questionId: { type: String },
      questionType: { type: String }, // MCQ, TrueFalse, Written
      studentAnswer: { type: String },
      correctAnswer: { type: String },
      isCorrect: { type: Boolean, default: false },
      marksObtained: { type: Number, default: 0 },
    },
  ],
  marksObtained: { type: Number, default: 0 },
  totalMarks: { type: Number, default: 0 },
  warningsCount: { type: Number, default: 0 },
  proctoringLogs: [
    {
      type: { type: String }, // TAB_SWITCH, WINDOW_BLUR, PHONE_DETECTED, FULLSCREEN_EXIT, MULTIPLE_PERSONS, NO_PERSON
      timestamp: { type: Date, default: Date.now },
      description: { type: String },
    }
  ],
  isVerified: { type: Boolean, default: false }, // Teacher verification
  resultPublished: { type: Boolean, default: true },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Result || mongoose.model('Result', resultSchema);
