import "./App.css";
import Dashboard from "./Components/Dashbord/Dashboard";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
// import Head from "./Components/Product/Head";
import Filters from "./Components/Product/Filters";
// import ProductTable from "./Components/Product/ProductTable";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/products",
      element: <Filters />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
}
//Taslim's test for PR!!
export default App;
