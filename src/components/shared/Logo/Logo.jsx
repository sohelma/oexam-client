import Link from 'next/link';

const Logo = ({
  className = '',
  iconSize = 'w-6 h-6',
  fontSize = 'text-2xl',
}) => {
  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      {/* Animated Icon Box */}
      <div
        className={`bg-gradient-to-br from-primary to-primary-focus p-2 rounded-xl shadow-lg shadow-primary/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 ease-in-out`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="white"
          className={iconSize}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147L12 3.25l7.74 6.897m-15.48 0L12 20.25l7.74-10.103m-15.48 0h15.48"
          />
        </svg>
      </div>

      {/* Text Part */}
      <span
        className={`${fontSize} font-black tracking-tighter text-base-content uppercase select-none`}
      >
        O<span className="text-primary group-hover:animate-pulse">-</span>EXAM
      </span>
    </Link>
  );
};

export default Logo;
