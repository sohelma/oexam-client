import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 group transition-all duration-300`}
    >
      <div className="relative flex items-center justify-center">
        {/* Infinity Glowing Background */}
        <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full animate-pulse"></div>

        {/* Floating Icon Box */}
        <div className="relative bg-gradient-to-tr from-primary via-primary to-blue-600 p-2.5 rounded-2xl shadow-lg animate-[floating_3s_ease-in-out_infinite] group-hover:rotate-[10deg] transition-transform duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`text-white w-5 h-5 md:w-7 md:h-7`}
          >
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.94 49.94 0 00-9.945 2.577.75.75 0 01-.508 0 49.912 49.912 0 00-9.945-2.577.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.623-2.662c.134.44.21.903.21 1.389 0 3.024-1.268 5.77-3.326 7.693a.75.75 0 01-1.012-.01 31.13 31.13 0 00-4.555-3.602a.75.75 0 01-.314-.611v-2.196z" />
            <path d="M10.94 15.473a48.45 48.45 0 00-7.623-2.662c-.134.44-.21.903-.21 1.389 0 3.024 1.268 5.77 3.326 7.693a.75.75 0 001.012-.01 31.13 31.13 0 014.555-3.602.75.75 0 00.314-.611v-2.196z" />
          </svg>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center leading-none tracking-[0.05em] md:text-2xl">
          <span className={`font-black text-base-content tracking-tighter`}>
            O
          </span>
          <span className={`font-extrabold text-primary px-0.5 animate-pulse`}>
            -
          </span>
          <span className={`font-black text-base-content tracking-tighter`}>
            EXAM
          </span>
        </div>
        <span className="text-[9px] font-bold tracking-[0.3em] text-base-content/40 uppercase -mt-0.5 ml-0.5">
          E-Learning
        </span>
      </div>
    </Link>
  );
};

export default Logo;
