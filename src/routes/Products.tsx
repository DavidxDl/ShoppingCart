import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      console.log(data);
      setProducts(data)
      setLoading(false);
    }
    getProducts();
  }, [])
  return (
    <>
      <Header />
      <NavBar />
      <main>
        {loading
          ? <h1>Loading...</h1>
          : products.map(product => (
            <div key={product.id} className="card" >
              <div className="card-img">
                <img style={{ width: "150px" }} src={product.image} />
              </div>
              <div className="card-content" >
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
              <button>Add to cart</button>
            </div>
          ))}
      </main >
    </>
  )
}
