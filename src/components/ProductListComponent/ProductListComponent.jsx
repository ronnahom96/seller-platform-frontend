import { useState } from 'react';
import './ProductListComponent.css';

const headers = ['ASIN', 'Locale', 'Price', 'Product Name', 'Product Link', ''];

function ProductListComponent({ isLoading, isError, productList, handleDeleteProducts }) {
    const [bulkDelete, setBulkDelete] = useState([]);

    if (isError) {
        <h1>An error occurred during fetch products</h1>
    }

    function changeBulkDelete(event, asin, locale) {
        if (event.target.checked) {
            setBulkDelete(prev => [...prev, { asin, locale }]);
        } else {
            setBulkDelete(prev => {
                return prev.filter(productId => !(productId.asin === asin && productId.locale === locale));
            });
        }
    }

    return (
        <div className='product-list-container'>
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
                        <tr key={`${product.asin}-${product.locale}`}>
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
                            <td>
                                <input className='delete-checkbox' type="checkbox"
                                    onClick={event => changeBulkDelete(event, product.asin, product.locale)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className='delete-button' disabled={bulkDelete.length === 0} onClick={() => handleDeleteProducts(bulkDelete)}>DELETE</button>
        </div>
    )
}

export default ProductListComponent;