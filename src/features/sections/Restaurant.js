// import React from 'react';
import MenuContainer from '../menus/MenuContainer';

export const Restaurant = (props) => {

  // const menu = useSelector(state => selectRestaurantMenu(state, props.restaurant.id))

  return (
    <div>
      { (props && props.restaurant.attributes.name) ? 
        (
          <div>
            <h1>{ props.restaurant.attributes.name }</h1>
            <h2>{ props.restaurant.attributes.street }, { props.restaurant.attributes.city }, { props.restaurant.attributes.state }</h2>
            <div>
              {/* { console.log('menu:', menu) } */}
              <MenuContainer restaurantId={props.restaurant.id}/>
            </div>
          </div>
        ) : 
        (<p>Loading...</p>)
      }
    </div>
  );
}
