const SalesCards = ({packages, status,textColor }) => {
  return (
    <div className="rounded-lg border border-gray-200 shadow-md p-2 w-48 h-24 bg-white text-center">
      {packages !== undefined && (
        <p className={`text-3xl font-medium ${textColor}`}>{packages}</p>
      )}
      {status !== undefined && (
        <p className={`text-sm font-semibold ${textColor}`}>{status}</p>
      )}
    </div>
  );
};

export default SalesCards;
