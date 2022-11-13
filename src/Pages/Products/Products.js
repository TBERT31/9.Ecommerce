import React, {useState, useEffect, useRef} from 'react'
import './Products.css'
import heart from './heart.svg'
import cartIcon from './shopping-cart.svg'
import { Link } from "react-router-dom"
import inventory from '../../data/inventory'
import { useDispatch } from 'react-redux'

export default function Products() {

  const dispatch = useDispatch();

  

  const addToCartProduct = (id)  => {

      const productClicked =   inventory.findIndex(obj => obj.id === id);

      const itemAdded = {
        ...inventory[productClicked],
        quantity: 1
        }
  
      dispatch({
        type: "ADDITEM",
        payload: itemAdded
      })


  } 



  return (
    <div className='container-products'>
      {inventory.map(item => (

          <div className="bloc-card">
            <div className="product-card">
              <div className="visual-aspect">
        <Link
        to={{
        pathname: `/produits/${item.title.replace(/\s+/g, '').trim()}`,
        }}
        key={item.id}
        >
                <img 
                className='img-product'
                src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                alt="image produit" />
        </Link>
                <div className="icon-container">

                  <div className="like-container">
                    <img src={heart} alt="icône j'aime" />
                  </div>

                  <div 
                  className="cart-container"
                  onClick={()=>addToCartProduct(item.id)}
                  key={item.id}
                  >
                    <img src={cartIcon} alt="icône Panier" />
                  </div>

                </div>
              </div>

            <Link
              to={{
              pathname: `/produits/${item.title.replace(/\s+/g, '').trim()}`,
              }}
              key={item.id}
              >
            <div className="info">
                  <p>{item.title}</p>
                  <p>Prix : {item.price}€</p>
            </div>
            </Link>
            </div>

            <div className="back-card"></div>
            {/* <span 
            ref={addingInfo}
            className='adding-info'></span> */}
          </div>

      ))}
    </div>
  )
}
