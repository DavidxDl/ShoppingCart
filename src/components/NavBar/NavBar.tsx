import styles from "./NavBar.module.css"

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>Products</li>
      </ul>
    </nav>
  )
}
