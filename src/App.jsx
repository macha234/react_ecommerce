import { useState } from "react"
import Card from "./Card"


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
      categorry: "Electronics",
      stock: 30,
    }
  ])


  return (
    <>
    {products.map((product) => (
      <Card product={product} />
    ))}
     
    </>
  )
}

export default App
