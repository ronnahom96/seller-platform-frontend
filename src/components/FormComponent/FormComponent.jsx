import { useState } from "react";
import './FormComponent.css';

function FormComponent({ isCreateProductError, createProductHandler }) {
    const [asin, setAsin] = useState('');
    const [locale, setLocale] = useState('');
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [sellerName, setSellerName] = useState('');

    function handleCreateProduct(e) {
        createProductHandler(e, { asin, locale, price: Number(price), name, link, sellerName, availability: true });
    }

    return (
        <>
            <form className="form-container card" onSubmit={handleCreateProduct}>
                <label>ASIN
                    <input type="text" onChange={e => setAsin(e.target.value)}
                        value={asin} />
                </label>
                <label>Locale
                    <input type="text" onChange={e => setLocale(e.target.value)}
                        value={locale} />
                </label>
                <label>Price
                    <input type="number" onChange={e => setPrice(e.target.value)}
                        value={price} />
                </label>
                <label>Product Name
                    <input type="text" onChange={e => setName(e.target.value)}
                        value={name} />
                </label>
                <label>Product Link
                    <input type="text" onChange={e => setLink(e.target.value)}
                        value={link} />
                </label>
                <label>Seller Name
                    <input type="text" onChange={e => setSellerName(e.target.value)}
                        value={sellerName} />
                </label>
                <button className="add-product-btn" type="submit">Add Product</button>
                {isCreateProductError && <span>Error occurred during create new product</span>}
            </form>
        </>
    )
}

export default FormComponent;