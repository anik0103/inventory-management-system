import "./App.css";
import Dashboard from "./Components/Dashbord/Dashboard";
import Products from "./Components/Product/Products";
import Suppliers from "./Components/Supplier/Suppliers";
import AddProducts from "./Components/Product/AddProduct";
import SignIn from "./Components/Authentication/SignIn";
import SignUp from "./Components/Authentication/SignUp";
import AppLayout from "./Components/Layout/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./Components/Product/ProductDetails";
import { RegionProvider } from "./Components/Dashbord/RegionContext";

// Wrap the entire app in RegionProvider to provide context

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "suppliers", element: <Suppliers />},
      {path: "add-product", element: <AddProducts />},
      {path: "product/:productName", element: <ProductDetails />},
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

function App() {
  return (
    <RegionProvider>
      <RouterProvider router={appRouter} />
    </RegionProvider>
  );
}

export default App;
