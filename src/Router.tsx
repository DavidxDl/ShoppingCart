import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.tsx";
import { useState, createContext } from "react";
import Products from "./routes/Products.tsx";

export interface cartContext {
  cart: item[];
  addToCart: (item: item) => void;
  removeFromCart: (id: string) => void;
}

export interface item {
  title: string;
  description: string;
  image: string;
  id: string;
  price: number;
  quantity: number;
}

export const CartContext = createContext<cartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default function Router() {
  const [cart, setCart] = useState<item[]>([]);

  function addToCart(item: item) {
    setCart((cart) => [...cart, item]);
  }

  function removeFromCart(id: string) {
    setCart((cart) => cart.filter((item) => item.id !== id));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
          <App />
        </CartContext.Provider>
      ),
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
