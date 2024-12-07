import React from 'react';

interface SpinnerProps {
  size?: '1' | '2' | '3';
  loading?: boolean;
  children?: React.ReactNode;
}

const Spinner: React.FC<SpinnerProps> = ({ size = '2', loading = true, children }) => {
  if (!loading) {
    return <>{children}</>;
  }

  const sizeClass = {
    '1': 'w-4 h-4',
    '2': 'w-12 h-12',
    '3': 'w-20 h-20',
  }[size];

  return (
    <div className={`flex items-center justify-center ${sizeClass}`}>
      <svg
        className="animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    </div>
  );
};

export default Spinner;