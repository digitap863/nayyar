
function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="relative flex flex-col items-center gap-4">
        {/* Animated Dots Loader */}
        <div className="flex gap-2">
          <div
            className="w-4 h-4 rounded-full bg-[#1D1EE3] animate-bounce"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="w-4 h-4 rounded-full bg-[#1D1EE3] animate-bounce"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="w-4 h-4 rounded-full bg-[#1D1EE3] animate-bounce"
            style={{ animationDelay: '300ms' }}
          />
        </div>

        {/* Loading Text */}
        <span className="text-[#1D1EE3] text-sm font-medium tracking-wider uppercase">
          Loading...
        </span>
      </div>

      {/* Custom CSS for smooth bounce */}
      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(-12px);
            opacity: 0.6;
          }
        }
        .animate-bounce {
          animation: bounce 0.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Loader;
