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

import AddSupplier from "./Components/Supplier/AddSupplier/AddSupplier";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "suppliers", element: <Suppliers />},
      { path: "AddSupplier", element: <AddSupplier /> }, 
      {path: "add-product", element: <AddProducts />},
      {path: "product/:productName", element: <ProductDetails />},
      { path: "suppliers", element: <div>Suppliers Page</div> },
      { path: "orders", element: <Order/> },
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

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
