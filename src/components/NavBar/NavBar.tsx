import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import ShoppingCartIcon from "../ShoppingCartIcon/ShoppingCartIcon";
import { item } from "../../routes/App";

interface Props {
  cartCount: item[];
}

export default function NavBar({ cartCount }: Props) {
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
      <ShoppingCartIcon cartCount={cartCount} />
    </nav>
  );
}
