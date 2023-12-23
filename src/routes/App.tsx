import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { useState } from "react";

export interface item {
  title: string;
  description: string;
  img: string;
}

function App() {
  const [cart, setCart] = useState<item[]>([]);
  return (
    <>
      <Header />
      <NavBar cartCount={cart} />
      <main>
        <button onClick={() => setCart((cart) => [...cart, 2])}>
          add cart
        </button>
        <h1>Welcome!</h1>
        <h2>This is a fake store.</h2>
        <h2>Do not try to buy anything</h2>
        <h2>It isn't real!</h2>
        <div>
          <span>See products here &rarr;</span>{" "}
          <Link to="products">
            <button>Products</button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default App;
