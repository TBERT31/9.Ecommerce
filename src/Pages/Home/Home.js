import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className="home-title">
        Bienvenue au <span>Shop</span>
      </h1>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut pariatur aliquam assumenda sed autem maiores quia aspernatur, inventore quas ad voluptates distinctio vitae fugit officiis necessitatibus tempore repudiandae, unde magnam.</p>

      <img src={imgHomeShop} alt="accueil shop" />
    </div>
  )
}
