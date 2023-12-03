import React from 'react';
import './Popular.css';
import dataProduct from '../Assets/Data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Best Selling Clothes</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.images} price={item.price} />
        })}
      </div>
      <h1>Best Selling Jewelry</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.images} price={item.price} />
        })}
      </div>
      <h1>Best Selling Bags</h1>
      <hr />
      <div className="popular-item">
        {dataProduct.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.images} price={item.price} />
        })}
      </div>
    </div>
  )
}

export default Popular