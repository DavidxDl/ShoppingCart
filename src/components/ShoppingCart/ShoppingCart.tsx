import {
  ForwardRefRenderFunction,
  Fragment,
  forwardRef,
  useContext,
  useMemo,
} from "react";
import { CartContext } from "../../Router";
import styles from "./ShoppingCart.module.css";

const ShoppingCart: ForwardRefRenderFunction<HTMLDivElement> = (props, ref) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = useMemo(() => {
    return cart
      .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      .toFixed(2);
  }, [cart]);
  return (
    <div className={styles.shoppingCart} ref={ref}>
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
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromCart(item.id);
                }}
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
      </ul>

      <p className={styles.total}>total: {totalPrice}$</p>
      <button className={styles.checkout}>checkout</button>
    </div>
  );
};

export default forwardRef(ShoppingCart);
