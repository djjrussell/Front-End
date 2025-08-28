"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
      <div className="flex flex-col items-center space-y-6 max-w-md mx-auto px-6">
        <div className="relative">
          <div className="w-20 h-20 border-3 border-red-600 rounded-lg bg-gray-800 shadow-lg flex items-center justify-center">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
        </div>

        {/* Error message */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-400 mb-4">
            Don't worry, your tasks are safe. Let's get you back on track.
          </p>
          {process.env.NODE_ENV === "development" && (
            <details className="text-left bg-gray-800 rounded-lg p-4 mb-4">
              <summary className="text-red-400 cursor-pointer mb-2">
                Error Details
              </summary>
              <code className="text-xs text-gray-300 break-all">
                {error.message}
              </code>
            </details>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>Try Again</span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Go Home</span>
          </button>
        </div>

        {/* Helpful tips */}
        <div className="text-center text-sm text-gray-500">
          <p>
            If this keeps happening, try refreshing the page or clearing your
            browser cache.
          </p>
        </div>
      </div>
    </div>
  );
}
