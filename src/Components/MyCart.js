import React from 'react'
import { Trash } from 'react-bootstrap-icons';
import './MyCart.css'

function countDuplicate(arr) {
    let duplicate = []
    let resultArray = []
    for (let i = 0; i < arr.length; i++) {
        if (!duplicate.includes(arr[i].name)) {
            duplicate.push(arr[i].name)
            resultArray.push({
                ...arr[i],
                count: 1
            })
        }
        else {
            const index = resultArray.findIndex(x => x.name == arr[i].name)
            resultArray[index].count++
        }
    }
    return resultArray
}



    const MyCart = props => {

    const { cartData = [] } = props

    let totalPrice = 0
    cartData.forEach(item => {
        totalPrice += item.price
    })


    const countArray = countDuplicate(cartData)
    console.log(countArray)

    const deleteProduct = (item) => {
        console.log(item)
        props.deleteProductfromCart(item)
    }

    return (
        <div className="cart-container">
            <div className="heading">
                My Cart ({cartData.length})
            </div>
            <div className="prods-container">
                {countArray.map((item, index)=> {
                    return <div className="products">
                        <div className="prod-name">
                            {item.name}  {item.count >= 2 ? " X " + item.count : ""}
                        </div>
                        <div className="prod-view">
                            <div className="prod-price">
                                {"Rs. " + item.price * item.count}
                            </div>
                            <div className="prod-delete">
                               <Trash color="red" onClick={() =>deleteProduct(item.id)} size={25}/>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="total">
                <div className="total-price">
                    Rs. {totalPrice}
                </div>

            </div>
            {totalPrice > 0 ? <div className="cart-actions">
                <button className="yellow large">
                    Proceed to Payment
                </button>
            </div> : null}
        </div>
    )
}

export default MyCart