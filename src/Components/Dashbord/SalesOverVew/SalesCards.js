const SalesCards = ({ title, packages, status, titleColor, textColor }) => {
  return (
    <div className="rounded-xl border border-gray-200 shadow-md p-4 w-60 bg-white text-center">
      <h2 className={`font-semibold ${titleColor} border-b border-blue-300 pb-1 mb-2 uppercase`}>
        {title}
      </h2>
      {packages !== undefined && (
        <p className={`text-sm font-medium ${textColor}`}>{packages}</p>
      )}
      {status !== undefined && (
        <p className={`text-sm font-semibold ${textColor}`}>{status}</p>
      )}
    </div>
  );
};

export default SalesCards;
