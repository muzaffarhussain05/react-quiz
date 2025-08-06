

export default function ProgressBar({ progress }) {
  return (
    <div className="mb-4 sm:mb-6">
      <div className="w-full bg-[#ced4da] rounded-full h-2 sm:h-3">
        <div
          className="bg-teal-500 h-2 sm:h-3 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
