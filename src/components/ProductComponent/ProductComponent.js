function ProductComponent({ product }) {
    return (
        <div className="product-container">
            <h2>{product.asin}</h2>
            <h2>{product.locale}</h2>
            <h2>{product.name}</h2>
            <h2>{product.sellerName}</h2>
            <h2>{product.price}</h2>
            <h2>{product.link}</h2>
        </div>
    )
}

export default ProductComponent