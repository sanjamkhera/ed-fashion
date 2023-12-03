import React from 'react';
import './NewCollections.css';
import NewCollection from '../Assets/NewCollections';
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div className = "new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {NewCollection.map ((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.images} price={item.price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections