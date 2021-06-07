import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { deleteItemFromOrderitems } from '../orderitems/orderitemsSlice'
import OrderItemsTable from "./OrderItemsTable";

export const OrderItemsContainer = (props) => {
  const dispatch = useDispatch();

  const initialOrderitems = useSelector((state) => state.orderitems)

  initialOrderitems.forEach(orderitem => {
    if (orderitem.count === 0) {
      dispatch(deleteItemFromOrderitems(orderitem))
    }
  })

  const orderitems = useSelector((state) => state.orderitems)
  .filter(orderitem => orderitem.count > 0)
  .sort((a, b) => {
    if (Object.values(a.attributes)[0] < Object.values(b.attributes)[0]) {
      return -1;
    } else {
      return 1;
    }
  })

  const restaurant = Object
  .entries(useSelector((state) => state.restaurants.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(restaurant => restaurant.id === props.restaurantId)

  return (
    <OrderItemsTable restaurant={restaurant} orderitems={orderitems} />
  )
}

OrderItemsContainer.propTypes = {
  match: PropTypes.object,
  restaurantId: PropTypes.string
}

export default OrderItemsContainer; 