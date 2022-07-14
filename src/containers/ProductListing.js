import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions'

const ProductListing = () => {

    const dispatch = useDispatch();

    //fetch products from the server
    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log('Error: ', err);
        })
        //send products to the redux store
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return ( 
        <div style = {{paddingTop: '5.75rem'}}className='ui grid container'>
            <ProductComponent></ProductComponent>
        </div>      
    );
};

export default ProductListing;