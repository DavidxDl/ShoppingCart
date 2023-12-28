import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import styles from "./App.module.css";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <NavBar />
      <main>
        {location.pathname === "/" && (
          <div className={styles.welcome}>
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
          </div>
        )}
        <Outlet />
      </main>
    </>
  );
}

export default App;
