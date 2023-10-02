import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from "./pages/Product/Product.jsx";
import Products from "./pages/Products/Products.jsx";
import Home from "./pages/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/navbar.jsx";
import "./app.scss";
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
