import { useState } from 'react'
import './App.css'
import ProductListComponent from './components/ProductListComponent/ProductListComponent'
import FormComponent from './components/FormComponent/FormComponent'
import SearchBySellerComponent from './components/SearchBySellerComponent/SearchBySellerComponent';

function App() {
  const [productList] = useState([
    { asin: "123", locale: "he", price: 123, name: "my product1", link: "http://my-product1:3000" },
    { asin: "423", locale: "he", price: 134, name: "my product2", link: "http://my-product2:3000" },
    { asin: "333", locale: "he", price: 125, name: "my product3", link: "http://my-product3:3000" },
  ]);

  function addProduct(product) {
    console.log("add new product", product)
  }

  function getProductsBySellerName() {
    console.log("getProductsBySellerName event");
  }

  return (
    <>
      <h1>Sellers Platform React SPA</h1>
      <SearchBySellerComponent getProductsBySellerName={getProductsBySellerName} />
      <div className="main">
        <FormComponent addProduct={addProduct} />
        <ProductListComponent productList={productList} />
      </div>
    </>
  )
}

export default App
