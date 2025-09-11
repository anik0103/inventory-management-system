import adminonly from "../../asset/adminonly.png"
const Unauthorized = () => {
  return (
    <div className="flex items-center justify-center h-screen text-red-500 text-xl">
      <img src={adminonly} alt="Unauthorized Access" className="h-screen" />
    </div>
  );
};

export default Unauthorized;
