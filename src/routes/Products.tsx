import { useEffect, useState } from "react";
import { item } from "../Router";

interface Props {
  cart: item[];
  setCart: React.Dispatch<React.SetStateAction<item[]>>;
}

export default function Products({ cart, setCart }: Props) {
  const [products, setProducts] = useState<item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  function handleAddToCart(item: item) {
    setCart([...cart, item]);
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
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Add to cart
              </button>
            </div>
          ))
        )}
      </main>
    </>
  );
}
