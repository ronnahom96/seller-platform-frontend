import { useState } from "react";
import './SearchBySellerComponent.css';

function SearchBySellerComponent({ handleChangeSellerName }) {
    const [inputSellerName, setInputSellerName] = useState('');

    return (
        <form className="search-seller-container" onSubmit={(e) => handleChangeSellerName(e, inputSellerName)}>
            <label>Seller Name
                <input style={{ margin: "2%" }} type="text"
                    onChange={e => setInputSellerName(e.target.value)} value={inputSellerName} />
            </label>
            <button type="submit">Change Seller</button>
        </form>

    )
}

export default SearchBySellerComponent;