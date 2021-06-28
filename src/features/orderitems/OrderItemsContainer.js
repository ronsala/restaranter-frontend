import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { deleteItemFromOrderitems } from '../orderitems/orderitemsSlice'
import OrderItemsTable from "./OrderItemsTable";

export const OrderItemsContainer = (props) => {
  const dispatch = useDispatch();

  const initialOrderitems = useSelector((state) => state.orderitems)

  if (initialOrderitems.length > 0) {
    initialOrderitems.forEach(orderitem => {
      if (orderitem.count === 0) {
        dispatch(deleteItemFromOrderitems(orderitem))
      }
    })
  }

  // Sort the items by name.
  const orderitems = useSelector((state) => state.orderitems)
  .filter(orderitem => orderitem.count > 0)
  .sort((a, b) => {
    if (Object.values(a.attributes)[0] < Object.values(b.attributes)[0]) {
      return -1;
    } else {
      return 1;
    }
  })

  return (
    <OrderItemsTable restaurantId={parseInt(props.restaurantId)} orderitems={orderitems} />
  )
}

OrderItemsContainer.propTypes = {
  match: PropTypes.object,
  restaurantId: PropTypes.number, 
}

export default OrderItemsContainer; 