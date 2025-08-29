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

const appRouter = createBrowserRouter([
  {
    path: "/", // 👈 now SignIn is the default
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/app", // 👈 move AppLayout here
    element: <AppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "suppliers", element: <Suppliers /> },
      { path: "AddSupplier", element: <AddSupplier /> },
      { path: "add-product", element: <AddProducts /> },
      { path: "product/:productName", element: <ProductDetails /> },
      { path: "orders", element: <Order /> },
      { path: "customer", element: <div>Customer Page</div> },
      { path: "reports", element: <Reports /> },
      { path: "userdetails", element: <UserDetails /> },
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
