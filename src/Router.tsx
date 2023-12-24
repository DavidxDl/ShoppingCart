import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.tsx";
import { useState } from "react";
import Products from "./routes/Products.tsx";

export interface item {
  title: string;
  description: string;
  image: string;
  id: string;
  price: number;
  quantity: number;
}

export default function Router() {
  const [cart, setCart] = useState<item[]>([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App cart={cart} setCart={setCart} />,
      children: [
        {
          path: "products",
          element: <Products cart={cart} setCart={setCart} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
