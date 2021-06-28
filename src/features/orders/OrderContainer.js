import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrderById, fetchOrder } from './ordersSlice'
import { Order } from './Order';
import { selectRestaurantById } from '../restaurants/restaurantsSlice';

export const OrderContainer = ({match}) => {
  const dispatch = useDispatch();

  const { status, error } = useSelector(state => state.orders);

  const currentUserId = useSelector(state => state.users.ids[0])

  const order = useSelector(state => selectOrderById(state, parseInt(match.params?.orderId)))

  useEffect(() => {
    if (!order) {
      dispatch(fetchOrder(parseInt(match.params.orderId)))
    }
  }, [match, dispatch, order])

  const restaurantId = order.attributes.restaurant_id

  const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (<Order order={order} restaurant={restaurant} currentUserId={currentUserId} />)
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

OrderContainer.propTypes = {
  match: PropTypes.object.isRequired,
}

export default OrderContainer;