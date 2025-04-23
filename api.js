const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
    // Products
    getProducts: async () => {
        const response = await fetch(`${API_BASE_URL}/products`);
        return response.json();
    },

    getProduct: async (id) => {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        return response.json();
    },

    createProduct: async (product) => {
        const response = await fetch(`${API_BASE_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        return response.json();
    },

    updateProduct: async (id, product) => {
        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        return response.json();
    },

    deleteProduct: async (id) => {
        const response = await fetch(`${API_BASE_URL}/products/${id}`, {
            method: 'DELETE',
        });
        return response.json();
    }
}; 