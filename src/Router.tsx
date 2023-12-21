import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.tsx";
import Products from "./routes/Products.tsx";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "products",
      element: <Products />
    }
  ])
  return <RouterProvider router={router} />
}
