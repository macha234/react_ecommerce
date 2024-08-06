import {useState} from 'react'


function Card({product,products,setProducts}) {
    const [newProduct,setNewProducts] = useState([])
    
    
    function removeProduct(id){
    const newProducts =    products.filter(product => product.id !== id)
    setNewProducts(newProducts)
    setProducts(newProducts)
    }
    return (
      <>
 <div>
    {JSON.stringify(newProduct)}
        <h1>{product.name}</h1>

        <ul>
            <li>Price: {product.price}</li>
            <li>Category: {product.category}</li>
            <li>Stock: {product.stock}</li>
        </ul>
       </div>

       <div>
        <button onClick={  ()=>removeProduct(product.id)  }>
            remove
        </button>
       </div>
      </>
    )
}

export default Card
