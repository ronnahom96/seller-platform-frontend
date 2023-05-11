import { useQuery, useMutation } from 'react-query';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/products';

export function useCreateProduct() {
    return useMutation(async (product) => {
        const response = await axios.post(`${BASE_URL}`, product);
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
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
        const response = await axios.post(`${BASE_URL}/delete-batch`, { productIds });
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
    });
}

export function useReadProducts(sellerName, availability = true) {
    return useQuery(['productBySellerName', sellerName], async () => {
        const response = await axios.get(`${BASE_URL}?sellerName=${sellerName}&availability=${availability}`);
        return response.data;
    }, {
        onError: (err) => {
            console.log('Error:', err);
        },
    });
}
