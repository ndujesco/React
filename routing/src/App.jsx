import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>404 Not Found</h1>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", Component: ProductsPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
