import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProducts, removeSelectedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    let { productId } = useParams();
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    //fetch product details from the server
    const fetchProductDetail = async () => {
        const response = await axios 
            .get(`https://fakestoreapi.com/products/${productId}`)
            .catch((err) => {
                console.log("Error: ", err);
        });
        //sending products data to redux store
        dispatch(selectedProducts(response.data));
    };

    useEffect(() => {
        if(productId && productId !== '') fetchProductDetail();
        dispatch(removeSelectedProduct());
    }, [productId]);
    
    return (
        <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="ui active inverted dimmer">
          <div className="ui large text loader">Loading</div>
        </div> 
      ) : (
        <div className="ui placeholder segment" style = {{marginTop: '5.4rem'}}>
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp">
                <img style={{ maxWidth: '75%' }} className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};  

export default ProductDetails;