import Cards from "./Cards";
import mockDataReports from "../../asset/fakeApiResponce/mockDataReports.json";

const ReportCards = () => {
  const snapshot = mockDataReports?.analyticsSnapshot || {
    items: [],
    percentageChange: [],
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-10">
      <Cards
        title="Total Availability"
        value={snapshot.items?.[0] ?? 0}
        percentageChange={snapshot.percentageChange?.[0] ?? 0}
        description="Current supply stock levels are constantly updated to ensure stock availability."
      />

      <Cards
        title="New Added"
        value={snapshot.items?.[1] ?? 0}
        percentageChange={snapshot.percentageChange?.[1] ?? 0}
        description="The latest supply stock levels that were recently added in the system."
      />

      <Cards
        title="Sold Out"
        value={snapshot.items?.[2] ?? 0}
        percentageChange={snapshot.percentageChange?.[2] ?? 0}
        description="The latest supply stock levels that recently sold or became unavailable in the system."
      />
    </div>
  );
};

export default ReportCards;

