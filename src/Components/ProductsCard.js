import React from 'react'
import "./ProductsCard.css"

const ProductsCard = props => {

    let { name,price,image,id} = props;

    const addProductsClick = () => {
        console.log(name, price)
        props.addProductsToCart({
            name,
            price,
            id
        })
    }
    return (
        <div className="card-container">
            <div className="prod-image">
                <img src={image}></img>
            </div>
            <div className="prod-metadata">
                <div className="item-name">
                    {name}
                </div>
                <div className="item-price">Rs. 
                    {price}
                </div>

            </div>
            <div className="card-actions">
                <button className="blue" onClick={addProductsClick}>
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductsCard