import "./App.css";
import Dashboard from "./Components/Dashbord/Dashboard";
import Products from "./Components/Product/Products";
import Suppliers from "./Components/Supplier/Suppliers";
import AddProducts from "./Components/Product/AddProduct";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp/SignUp";
import AppLayout from "./Components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/Product/ProductDetails";
import Order from "./Components/Orders/Order";
import { ProductProvider } from "./Components/Product/PdtContext";
import AddSupplier from "./Components/Supplier/AddSupplier/AddSupplier";
import { RegionProvider } from "./Components/Dashbord/RegionContext";
import Reports from "./Components/Reports/Reports";
import UserDetails from "./Components/UserDetails";
import Customer from "./Components/Customer/Customer";
import ProtectedRoute from "./Components/Authentication/ProtectedRoute ";
import Unauthorized from "./Components/Authentication/Unauthorized ";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      // Admin-only section
      {
        element: <ProtectedRoute role="admin" />, // wrapper
        children: [
          { index: true, element: <Dashboard /> },
          { path: "suppliers", element: <Suppliers /> },
          { path: "AddSupplier", element: <AddSupplier /> },
          { path: "orders", element: <Order /> },
          { path: "customer", element: <Customer /> },
          { path: "reports", element: <Reports /> },
          { path: "add-product", element: <AddProducts /> },
        ],
      },

      // User + Admin section
      {
        element: <ProtectedRoute />, // no role restriction
        children: [
          { path: "products", element: <Products /> },
          { path: ":productName", element: <ProductDetails /> },
          { path: "userdetails", element: <UserDetails /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <ProductProvider>
      <RegionProvider>
        <RouterProvider router={appRouter} />
      </RegionProvider>
    </ProductProvider>
  );
}

export default App;
