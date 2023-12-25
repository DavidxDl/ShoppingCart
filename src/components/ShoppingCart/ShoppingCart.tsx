import { Fragment } from "react";
import { item } from "../../Router";
import styles from "./ShoppingCart.module.css";

interface Props {
  cart: item[];
  setCart: React.Dispatch<React.SetStateAction<item[]>>;
}
export default function ShoppingCart({ cart, setCart }: Props) {
  function handleDeleteItem(id) {
    setCart((cart) => cart.filter((item) => item.id !== id));
  }
  return (
    <div className={styles.shoppingCart}>
      <ul className={styles.ul}>
        {cart.map((item, i) => (
          <Fragment key={item.id}>
            <li className={styles.li}>
              <p className={styles.productName}>{item.title}</p>
              <p>quantity: {item.quantity}</p>
              <p>
                price: <span className={styles.price}>{item.price}$</span>
              </p>
              <button
                className={styles.closeBtn}
                onClick={() => handleDeleteItem(item.id)}
              >
                ❌
              </button>
            </li>
            {i !== cart.length - 1 && (
              <hr style={{ color: "#6a994e", width: "100%" }} />
            )}
          </Fragment>
        ))}
        <hr style={{ color: "#6a994e", width: "100%" }} />
        <li>
          <p className={styles.total}>
            total:{" "}
            {cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}$
          </p>
        </li>
        <button className={styles.checkout}>checkout</button>
      </ul>
    </div>
  );
}
