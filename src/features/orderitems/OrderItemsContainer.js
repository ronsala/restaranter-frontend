import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import OrderItemsTable from "./OrderItemsTable";

export const OrderItemsContainer = () => {
  const orderitems = useSelector((state) => state.orderitems)
  .filter(orderitem => orderitem.count > 0);

      return (
          <OrderItemsTable orderitems={orderitems} />
      )
}

export default OrderItemsContainer;