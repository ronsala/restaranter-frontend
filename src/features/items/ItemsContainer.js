import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import ItemsTable from "./ItemsTable";

export const ItemsContainer = (props) => {
  const { status, error } = useSelector(state => state.items);

  const sectionId = parseInt(props.section?.id);

  // let orderitems = props.items;
  
  // let freshItems = Object
  let items = Object
  .entries(useSelector((state) => state.items.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(item => item.attributes.section_id === sectionId);

  // const items = (orderitems.length !== 0) ? orderitems : freshItems

  // Sort the items by name.
  items.sort((a, b) => {
    if (Object.values(a.attributes)[0] < Object.values(b.attributes)[0]) {
      return -1;
    } else {
      return 1;
    }
  })

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
          <ItemsTable items={items}/>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

ItemsContainer.propTypes = {
  section: PropTypes.object.isRequired,
  restaurant_id: PropTypes.number.isRequired,
  menu_id: PropTypes.number.isRequired,
  items: array,
};

export default ItemsContainer;