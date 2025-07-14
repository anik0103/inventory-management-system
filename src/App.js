import "./App.css";
import Dashboard from "./Components/Dashbord/Dashboard";
import Products from "./Components/Product/Products";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// ✅ Layout that wraps all pages WITH routing context
const AppLayout = () => {
  return (
    <div className="App">
      {/* Fixed Navbar at top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Sidebar + Main content */}
      <div className="flex pt-16">
        <Sidebar /> {/* ✅ Now safe to use <Link> here */}
        <div className="ml-16 flex-1 p-4">
          <Outlet /> {/* ✅ This is where child routes render */}
        </div>
      </div>
    </div>
  );
};

// ✅ Define routing structure
const appRouter = createBrowserRouter([
  {
    path: "/", // Base path
    element: <AppLayout />, // Contains sidebar + navbar
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "suppliers", element: <div>Suppliers Page</div> },
      { path: "orders", element: <div>Orders Page</div> },
      { path: "customer", element: <div>Customer Page</div> },
      { path: "reports", element: <div>Reports Page</div> },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

// ✅ Main App component
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
