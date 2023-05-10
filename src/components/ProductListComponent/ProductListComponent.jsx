import './ProductListComponent.css';


function ProductListComponent({ productList }) {
    const headers = ['ASIN', 'Locale', 'Price', 'Product Name', 'Product Link'];
    return (
        <table className="card">
            <thead>
                <tr>
                    {headers.map((header, i) => {
                        <th key={i}>{header}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {productList.map(product => (
                    <tr key={`${product.asin}-${product.locate}`}>
                        <td>
                            {product.asin}
                        </td>
                        <td>
                            {product.locale}
                        </td>
                        <td>
                            {product.price}
                        </td>
                        <td>
                            {product.name}
                        </td>
                        <td>
                            {product.link}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ProductListComponent;