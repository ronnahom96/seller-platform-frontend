import './ProductListComponent.css';

const headers = ['ASIN', 'Locale', 'Price', 'Product Name', 'Product Link'];

function ProductListComponent({ isLoading, isError, productList }) {
    if (isError) {
        <h1>An error occurred during fetch products</h1>
    }

    return (
        <table>
            <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {isLoading ? (
                    <tr><td>Fetching data...</td></tr>
                ) : productList && productList.map(product => (
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