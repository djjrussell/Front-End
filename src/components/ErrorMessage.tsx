interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className="bg-red-900/30 border border-red-800 text-red-400 px-4 py-3 rounded-lg mb-6">
      {error}
    </div>
  );
};

export default ErrorMessage;
