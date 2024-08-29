import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContext from './ProductContext';

const ProductState = (props) => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // const response = await axios.get('https://cors-anywhere.herokuapp.com/https://cdn.drcode.ai/interview-materials/products.json');
                const response = await axios.get('https://api.allorigins.win/raw?url=https://cdn.drcode.ai/interview-materials/products.json');
                setProducts(response.data.products);
            } catch (error) {
                console.error("Error fetching the products data: ", error);
            }
        };

        fetchProducts();
    }, []);
    

    return (
        <ProductContext.Provider value={{ products }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState;
