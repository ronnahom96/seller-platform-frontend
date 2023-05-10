import { useState } from "react";
import './FormComponent.css';

function FormComponent({ addProduct }) {
    const [asin, setAsin] = useState('');
    const [locale, setLocale] = useState('');
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [sellerName, setSellerName] = useState('');

    return (
        <form className="form-container card" onSubmit={() => addProduct({ asin, locale, price, name, link })}>
            <label>ASIN
                <input type="text" onChange={e => setAsin(e.target.value)}
                    value={asin} />
            </label>
            <label>Locale
                <input type="text" onChange={e => setLocale(e.target.value)}
                    value={locale} />
            </label>
            <label>Price
                <input type="text" onChange={e => setPrice(e.target.value)}
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
            <button type="submit">Add Product</button>
        </form>
    )
}

export default FormComponent;