import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import { item } from "../../Router";
import { SetStateAction, useEffect, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

interface Props {
  cart: item[];
  setCart: React.Dispatch<SetStateAction<item[]>>;
}

export default function NavBar({ cart, setCart }: Props) {
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    function listener(e: MouseEvent) {
      if (
        e.target === document.querySelector("svg") ||
        e.target === document.querySelector("button")
      )
        return;
      setOpenCart(false);
    }
    window.addEventListener("click", listener);

    return () => document.removeEventListener("click", listener);
  }, []);

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <li className={styles.li}>Home</li>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/products"
        >
          <li className={styles.li}>Products</li>
        </Link>
      </ul>
      {openCart && <ShoppingCart cart={cart} setCart={setCart} />}
      <ShoppingCartIcon
        handleClick={() => setOpenCart(!openCart)}
        cartCount={cart}
      />
    </nav>
  );
}
