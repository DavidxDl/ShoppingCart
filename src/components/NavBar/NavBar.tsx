import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import { item } from "../../Router";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

interface Props {
  cart: item[];
}

export default function NavBar({ cart }: Props) {
  const [openCart, setOpenCart] = useState(false);

  return (
    <nav className={styles.nav}>
      <ul>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <li>Home</li>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/products"
        >
          <li>Products</li>
        </Link>
      </ul>
      {openCart && <ShoppingCart cart={cart} />}
      <ShoppingCartIcon
        handleClick={() => setOpenCart(!openCart)}
        cartCount={cart}
      />
    </nav>
  );
}
