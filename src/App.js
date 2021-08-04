import React , {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import MyGallery from './Components/MyGallery';
import MyCart from './Components/MyCart';
import ProductsCard from './Components/ProductsCard';



function App() {
  const Local_Storage_Key = "products"
  const [cartData, setcartData] = useState([])
  const [productList, setProductList] = useState([])

  const addProductsToCart = (item) => {
    setcartData([ ...cartData, item ])
    console.log(cartData)
  }

  const deleteProductfromCart =(item) => {
    console.log(cartData)
    let index = cartData.findIndex(prod => prod.id === item)
    console.log(index)
      if(index > -1){
          cartData.splice(index,1)
      }
          setcartData([...cartData])
          console.log(cartData)
      
  }

  useEffect(() => {
    axios.get("http://localhost:3002/products").then(response => {
      console.log("Data recieved")
      setProductList(response.data)
    }).catch(err=>{
      console.error("Data didnt recieved",err)
    })
    }, [])
  // useEffect(() => {
  //   let retrievedData = JSON.parse(localStorage.getItem(Local_Storage_Key))
  //   if(retrievedData)setcartData(retrievedData)
  // }, [])
  // useEffect(() => {
  //   localStorage.setItem(Local_Storage_Key,JSON.stringify(cartData))
  // }, [cartData])
  return (
    <div className="container">
      <MyGallery productsList={productList} addProductsToCart={addProductsToCart} />
      <MyCart cartData={cartData} deleteProductfromCart={deleteProductfromCart}/>
    </div>
    
  );
}

export default App;
