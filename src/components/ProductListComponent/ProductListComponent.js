import ProductComponent from "../ProductComponent/ProductComponent"

function ProductListComponent({ productList }) {
    const productsView = productList.map(product => (
        <ProductComponent key={`${product.asin}-${product.locale}`} product={product} />
    ))

    return (
        <div className="product-list-container">
            {productsView}
        </div>
    )
}

export default ProductListComponent