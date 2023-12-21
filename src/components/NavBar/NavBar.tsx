import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/"
        >
          <li>Home</li>
        </Link>

        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/products"
        >
          <li>Products</li>
        </Link>
      </ul>
    </nav>
  )
}
