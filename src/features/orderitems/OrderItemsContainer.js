import React from 'react';
import { useSelector } from 'react-redux';
import OrderItemsTable from "./OrderItemsTable";

export const OrderItemsContainer = () => {
  const orderitems = useSelector((state) => state.orderitems)

      return (
          <OrderItemsTable orderitems={orderitems} />
      )
}

export default OrderItemsContainer;