import { useState } from 'react';
import { useCreateProduct, useDeleteBatchProducts, useReadProducts } from '../../hooks/productsApi';
import SearchBySellerComponent from '../../components/SearchBySellerComponent/SearchBySellerComponent';
import ProductListComponent from '../../components/ProductListComponent/ProductListComponent';
import FormComponent from '../../components/FormComponent/FormComponent';
import './Home.css';

function Home() {
    const [sellerName, setSellerName] = useState(null)
    const { isError: isCreateProductError, mutateAsync: createProduct } = useCreateProduct();
    const { isLoading: isReadProductLoading, isError: isReadProductsError, data: productList, refetch } = useReadProducts(sellerName);
    const { isError: isDeleteProductError, mutateAsync: deleteProduct } = useDeleteBatchProducts();

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

    async function handleDeleteProducts(productIds) {
        await deleteProduct(productIds)
        console.log("delete product", productIds);
    }

    return (
        <>
            <h1>Sellers Platform React SPA</h1>
            <SearchBySellerComponent handleChangeSellerName={handleChangeSellerName} />
            <div className="main">
                <FormComponent isCreateProductError={isCreateProductError} createProductHandler={createProductHandler} />
                <ProductListComponent isLoading={isReadProductLoading} isError={isReadProductsError}
                    productList={productList} handleDeleteProducts={handleDeleteProducts} />
            </div>
            {isDeleteProductError && (<span>Error during trying to delete</span>)}
        </>
    )
}

export default Home