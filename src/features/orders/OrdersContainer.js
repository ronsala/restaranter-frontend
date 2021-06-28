import React, { useEffect } from 'react';
import PropTypes, { array } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrderById, selectOrderIds, fetchOrders } from './ordersSlice'
import OrdersTable from "./OrdersTable";
import { Order } from './Order';
import { selectRestaurantById } from '../restaurants/restaurantsSlice';

export const OrdersContainer = ({match}) => {
  const dispatch = useDispatch();
  let path = match.path

  const orderIds = useSelector(state => selectOrderIds(state))

  const newOrderId = parseInt(orderIds[orderIds.length - 1])

  const newOrder = useSelector(state => selectOrderById(state, newOrderId))

  const { status, error } = useSelector(state => state.orders);

  const newOrderRestaurant = useSelector(state => selectRestaurantById(state, newOrder?.attributes.restaurant_id))

  const restaurantId = match.params.restaurantId

  const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))

  useEffect(() => {
      dispatch(fetchOrders(restaurantId))
  }, [match, dispatch, restaurantId])

  const restaurantOrders = Object
    .entries(useSelector((state) => state.orders.entities))
    .flat()
    .filter(element => typeof element === 'object')
    .filter(order => order.attributes.restaurant_id === parseInt(match.params.restaurantId));

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      switch (path) {
        case '/your_order':
          return (<Order order={newOrder} restaurant={newOrderRestaurant} />);
        case '/restaurants/:restaurantId/orders':
          return (<OrdersTable orders={restaurantOrders} restaurant={restaurant} />);
        default:
          return (<div>Unknown error</div>)
      }
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

OrdersContainer.propTypes = {
  orders: array, 
  match: PropTypes.object.isRequired,
}

export default OrdersContainer;