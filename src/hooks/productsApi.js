import { useQuery, useMutation, QueryClient } from 'react-query';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/products';

const queryClient = new QueryClient();

export function useCreateProduct() {
    return useMutation(async (product) => {
        const response = await axios.post(BASE_URL, product);
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
        onSuccess: (product) => {
            queryClient.invalidateQueries(["productBySellerName"])
            console.log("successfully create product", product);
        }
    });
}

export function useReadProduct(asin, locale) {
    return useQuery(['productById', asin, locale], async () => {
        const response = await axios.get(`${BASE_URL}/${asin}/${locale}`);
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
    });
}

export function useUpdateProduct() {
    return useMutation(async (asin, locale, productToUpdate) => {
        const response = await axios.put(`${BASE_URL}/${asin}/${locale}`, productToUpdate);
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
    });
}

export function useDeleteBatchProducts() {
    return useMutation(async (productIds) => {
        const response = await axios.post(`${BASE_URL}/delete-batch`, productIds);
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
        onSuccess: (product) => {
            queryClient.invalidateQueries(["productBySellerName"])
            console.log("successfully delete product", product);
        }
    });
}

export function useReadProducts(sellerName, availability = true) {
    return useQuery(['productBySellerName'], async () => {
        const response = await axios.get(BASE_URL, { params: { sellerName, availability } });
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
        onSuccess: (data) => {
            console.log("successfully fetch products", data);
        },
    });
}
