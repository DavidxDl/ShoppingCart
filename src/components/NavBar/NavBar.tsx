import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import { useEffect, useRef, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function NavBar() {
  const [openCart, setOpenCart] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const cartIconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function listener(e: MouseEvent) {
      if (
        (cartRef.current && cartRef.current.contains(e.target as Node)) ||
        (cartIconRef.current && cartIconRef.current.contains(e.target as Node))
      )
        return;
      setOpenCart(false);
    }
    document.addEventListener("click", listener);
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
      {openCart && <ShoppingCart ref={cartRef} />}
      <ShoppingCartIcon
        ref={cartIconRef}
        handleClick={() => {
          setOpenCart(!openCart);
          console.log(cartRef);
          console.log(cartIconRef);
        }}
      />
    </nav>
  );
}
