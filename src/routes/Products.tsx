import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json();
      console.log(data);
      setProducts(data)
    }
    getProducts();
  }, [])
  return (
    <>
      <Header />
      <NavBar />
      <main>
        {products.map(product => (
          <div key={product.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", margin: "10px" }}>
            <img style={{ width: "150px" }} src={product.image} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </main >
    </>
  )
}
