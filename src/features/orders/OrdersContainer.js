import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from './ordersSlice';
import OrdersTable from "./OrdersTable";

export const OrdersContainer = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.orders);
  const sectionId = parseInt(props.section?.id)

  useEffect(() => {
    if (props && props.section) {
      dispatch(fetchOrders({restaurantId: props.restaurant_id, menuId: props.menu_id, sectionId: sectionId}))
    }
  }, [dispatch, props, sectionId])

  const orders = Object
  .entries(useSelector((state) => state.orders.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(order => order.attributes.section_id === sectionId);

  // const ordersList = orders.map((order) => {
  //   return <OrderCard key={order.id} name={order.attributes.name} price={order.attributes.price} desc={order.attributes.desc} id={order.id} />
  // })

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
          <OrdersTable orders={orders}/>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

export default OrdersContainer;