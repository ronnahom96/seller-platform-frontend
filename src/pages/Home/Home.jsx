import { useState } from 'react';
import { useCreateProduct, useReadProducts } from '../../hooks/productsApi';
import SearchBySellerComponent from '../../components/SearchBySellerComponent/SearchBySellerComponent';
import ProductListComponent from '../../components/ProductListComponent/ProductListComponent';
import FormComponent from '../../components/FormComponent/FormComponent';
import './Home.css';

function Home() {
    const [sellerName, setSellerName] = useState(null)
    const { isError: isCreateProductError, mutateAsync: createProduct } = useCreateProduct();
    const { isLoading: isReadProductLoading, isError: isReadProductsError, data: productList, refetch } = useReadProducts(sellerName);

    async function createProductHandler(event, newProduct) {
        event.preventDefault();
        await createProduct(newProduct);
        refetch();
        console.log("create new product")
    }

    function handleChangeSellerName(event, sellerName) {
        event.preventDefault();
        setSellerName(sellerName);
        console.log("change products by seller name");
    }

    return (
        <>
            <h1>Sellers Platform React SPA</h1>
            <SearchBySellerComponent handleChangeSellerName={handleChangeSellerName} />
            <div className="main">
                <FormComponent isCreateProductError={isCreateProductError} createProductHandler={createProductHandler} />
                <ProductListComponent isLoading={isReadProductLoading} isError={isReadProductsError} productList={productList} />
            </div>
            <h1></h1>
        </>
    )
}

export default Home