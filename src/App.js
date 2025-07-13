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
      path: "/",
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
      <div className="fixed top-0 left-0 w-full z-50">
      <Navbar />
      </div>
      <div className="flex pt-16">
        <Sidebar/>
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
}
//Taslim's test for PR!!
export default App;
