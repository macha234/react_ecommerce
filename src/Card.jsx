function Card({product}) {
    return (
       <div>
        <h1>{product.name}</h1>

        <ul>
            <li>Price: {product.price}</li>
            <li>Category: {product.category}</li>
            <li>Stock: {product.stock}</li>
        </ul>
       </div>
    )
}

export default Card