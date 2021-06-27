/* eslint-disable no-debugger */
// import React, { useEffect } from 'react';
import React from 'react';
import PropTypes, { array } from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { fetchOrders } from './ordersSlice';
import { selectOrderById, selectOrderIds } from './ordersSlice'
// import OrdersTable from "./OrdersTable";
import { Order } from './Order';
import { selectRestaurantById } from '../restaurants/restaurantsSlice';

export const OrdersContainer = ({match}) => {
  // debugger
  let url = match.url
  // const dispatch = useDispatch();
  const orderIds = useSelector(state => selectOrderIds(state))

  const newOrderId = parseInt(orderIds[orderIds.length - 1])

  const newOrder = useSelector(state => selectOrderById(state, newOrderId))

  const { status, error } = useSelector(state => state.orders);

  const newOrderRestaurant = useSelector(state => selectRestaurantById(state, newOrder?.attributes.restaurant_id))

  // useEffect(() => {
  //   if (props && props.section) {
  //     dispatch(fetchOrders({restaurantId: props.restaurant_id, menuId: props.menu_id, sectionId: sectionId}))
  //   }
  // }, [dispatch, props, sectionId])

  // const orders = Object
  // .entries(useSelector((state) => state.orders.entities))
  // .flat()
  // .filter(element => typeof element === 'object')
  // .filter(order => order.attributes.restaurant_id === restaurantId);

  // const ordersList = orders.map((order) => {
  //   return <OrderCard key={order.id} name={order.attributes.name} price={order.attributes.price} desc={order.attributes.desc} id={order.id} />
  // })
/* <OrdersTable orders={orders}/>  */

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <div>
          { url === '/your_order'
            ? <div>
                <Order order={ newOrder } restaurant={newOrderRestaurant} />
              </div>
            : <div>Loading...</div>
          }
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

OrdersContainer.propTypes = {
  orders: array, 
  match: PropTypes.object.isRequired,
  // orders.map: PropTypes.array, 
}

export default OrdersContainer;