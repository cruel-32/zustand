const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: {
  error: { message: string };
  resetErrorBoundary: () => void;
}) => {
  console.log('resetErrorBoundary :::: ', resetErrorBoundary);
  return (
    <>
      <h1>에러페이지</h1>
      <p>{error.message}</p>
    </>
  );
};

export default ErrorFallback;
