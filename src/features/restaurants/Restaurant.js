import React from 'react'

export default function Restaurant(props) {
  return (
    <div>
      { (typeof props.restaurant.attributes.name !== 'undefined') ? 
        (
          <div>
            <h1>{ props.restaurant.attributes.name }</h1>
            <h2>{ props.restaurant.attributes.street }</h2>
          </div>
        ) : 
        (<p>Loading...</p>)
      }
    </div>
  );
}
