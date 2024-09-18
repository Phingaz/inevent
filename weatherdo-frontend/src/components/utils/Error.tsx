const Error = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div className="bg-red-100 text-red-600 p-4 rounded-md mb-4">
      <p>Error fetching weather data: {errorMessage}</p>
    </div>
  );
};

export default Error;
