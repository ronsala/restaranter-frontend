import React from 'react'

export default function Restaurant(props) {
  return (
    <div>
      { (typeof props.restaurant.attributes.name !== 'undefined') ? 
        (<h1>{ props.restaurant.attributes.name }</h1>) : 
        (<p>Loading...</p>)
      }
    </div>
  );
}
