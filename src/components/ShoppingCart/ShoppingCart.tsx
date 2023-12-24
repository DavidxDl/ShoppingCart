import { item } from "../../Router";
import styles from "./ShoppingCart.module.css";

interface Props {
  cart: item[];
  setCart?: React.Dispatch<React.SetStateAction<item[]>>;
}
export default function ShoppingCart({ cart, setCart }: Props) {
  return (
    <div className={styles.shoppingCart}>
      <ul className={styles.itemList}>
        {cart.map((item) => (
          <li key={item.id} className={styles.item}>
            <p className={styles.productName}>{item.title}</p> price:{" "}
            {item.price}$
          </li>
        ))}
        <hr style={{ color: "black", width: "100%" }} />
        <li>total: {cart.reduce((acc, curr) => acc + curr.price, 0)}$</li>
      </ul>
    </div>
  );
}
