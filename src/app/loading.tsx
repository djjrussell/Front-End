"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] text-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="w-20 h-20 border-3 border-gray-600 rounded-lg bg-gray-800 shadow-sm animate-pulse">
            <div className="absolute inset-0 bg-blue-500 rounded-lg animate-checkbox-fill"></div>

            <svg
              className="absolute inset-0 w-full h-full p-3 text-white animate-checkmark-draw"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Loading your tasks
            <span className="animate-pulse">...</span>
          </h2>
          <p className="text-sm text-gray-400">Getting everything organized</p>
        </div>

        <div className="space-y-2 opacity-60">
          {["Setting up workspace", "Loading tasks", "Almost ready"].map(
            (task, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 text-sm text-gray-300"
              >
                <div
                  className="w-4 h-4 border-2 border-gray-600 rounded flex items-center justify-center animate-task-complete"
                  style={{
                    animationDelay: `${i * 0.8}s`,
                  }}
                >
                  <svg
                    className="w-3 h-3 text-green-400 animate-fade-in-check"
                    style={{
                      animationDelay: `${i * 0.8 + 0.4}s`,
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>{task}</span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
