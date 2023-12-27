import { useEffect, useState } from "react";
import { item } from "../Router";

interface Props {
  cart: item[];
  setCart: React.Dispatch<React.SetStateAction<item[]>>;
}

export default function Products({ cart, setCart }: Props) {
  const [products, setProducts] = useState<item[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  function handleAddToCart(item: item) {
    if (cart.includes(item) || quantity === 0) return;
    item.quantity = quantity;
    setQuantity(1);
    setCart([...cart, item]);
  }

  function handleQuantityChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(e.target.value));
  }
  return (
    <>
      <main>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          products.map((product) => (
            <div key={product.id} className="card">
              <div className="card-img">
                <img style={{ width: "150px" }} src={product.image} />
              </div>
              <div className="card-content">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3 style={{ fontSize: "23px" }}>{product.price}$</h3>
              </div>
              {!cart.includes(product) ? (
                <>
                  <label style={{ marginBottom: "8px" }}>
                    quantity
                    <input
                      style={{ width: "50px" }}
                      type="number"
                      onChange={handleQuantityChange}
                      value={quantity}
                    />
                  </label>
                  <button onClick={() => handleAddToCart(product)}>
                    Add to cart
                  </button>
                </>
              ) : (
                <p>added ✔</p>
              )}
            </div>
          ))
        )}
      </main>
    </>
  );
}
