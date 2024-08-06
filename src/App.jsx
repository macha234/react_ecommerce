import { useState } from "react"
import Card from "./Card"
import './index.css'

function App() {
  const [products, setProducts] = useState([
    {
      id:1,
      name: "Laptop",
      price: 999.99,
      category: "Electronics",
      stock: 15,
    },
    {
      id: 2,
      name: "SmartPhone",
      price: 699.99,
      category: "Electronics",
      stock: 30,
    }
  ])


  return (
    <>
    <div className="showcase">
    {products.map((product) => (
      <Card
       product={product} 
       products={products}
       setProducts={setProducts} />
    ))}
    </div>
     
    </>
  )
}

export default App
