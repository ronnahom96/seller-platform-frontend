import { useState } from "react";
import './SearchBySellerComponent.css';

function SearchBySellerComponent({ getProductsBySellerName }) {
    const [inputSellerName, setInputSellerName] = useState('');

    return (
        <form className="search-seller-container">
            <label>Seller Name
                <input type="text" onChange={e => setInputSellerName(e.target.value)}
                    value={inputSellerName} />
            </label>
            <button className="search-seller-btn" type="submit" onChange={getProductsBySellerName}>Change Seller</button>
        </form>

    )
}

export default SearchBySellerComponent;