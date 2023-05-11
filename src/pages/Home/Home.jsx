import { useState } from 'react';
import { useCreateProduct, useReadProducts } from '../../hooks/productsApi';
import SearchBySellerComponent from '../../components/SearchBySellerComponent/SearchBySellerComponent';
import ProductListComponent from '../../components/ProductListComponent/ProductListComponent';
import FormComponent from '../../components/FormComponent/FormComponent';
import './Home.css';

function Home() {
    const [productList, setProductList] = useState([
        { asin: "123", locale: "he", price: 123, name: "my product1", link: "http://my-product1:3000" },
        { asin: "423", locale: "he", price: 134, name: "my product2", link: "http://my-product2:3000" },
        { asin: "333", locale: "he", price: 125, name: "my product3", link: "http://my-product3:3000" },
    ]);
    const [sellerName, setSellerName] = useState('')

    const { isError: isCreateProductError, mutateAsync: createProduct } = useCreateProduct();
    // const { isLoading, isError: isReadProductsError, data: productList } = useReadProducts(sellerName);

    async function createProductHandler(event, newProduct) {
        event.preventDefault();
        await createProduct(newProduct);
        console.log("create new product", createProduct)
    }

    function handleChangeSellerName(event, sellerName) {
        event.stopPropagation();
        setSellerName(sellerName);
        console.log("change products by seller name");
    }

    return (
        <>
            <h1>Sellers Platform React SPA</h1>
            <SearchBySellerComponent getProductsBySellerName={handleChangeSellerName} />
            <div className="main">
                <FormComponent isCreateProductError={isCreateProductError} createProductHandler={createProductHandler} />
                <ProductListComponent isLoading={null} isError={null} productList={productList} />
            </div>
            <h1></h1>
        </>
    )
}

export default Home