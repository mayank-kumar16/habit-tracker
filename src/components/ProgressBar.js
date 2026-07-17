const ProgressBar = ({ progress }) => {
  return (
    <div className="relative w-full h-8 bg-gray-300 rounded-full overflow-hidden">
      <div
        className="relative h-full bg-green-500 transition-all duration-500"
        style={{ width: `${progress}%` }}
      >
        {progress > 0 && (
          <span className="absolute inset-0 flex items-center justify-center text-white font-semibold">
            {progress}%
          </span>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;
