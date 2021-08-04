import React from 'react';
import ProductsCard from './ProductsCard';
import "./MyGallery.css"
import mobile from "../images/mobile.jpg";
import shoes from "../images/shoes.jpeg";
import TV from "../images/TV.jpg";
import watch from "../images/watch.jpg";
import laptop from "../images/laptop.jpeg";
import spects from "../images/spects.jpeg"

const MyGallery = (props) => {

    const { productsList =[] } = props

    return(
        <div className="MyGallery-container">
            {productsList.map(product => {
               return  <ProductsCard 
                name={product.name}
                price={product.price}
                image={product.image}
                id={product.id}
                addProductsToCart={props.addProductsToCart}
                />
            })}
            
        </div>
    )
}

export default MyGallery