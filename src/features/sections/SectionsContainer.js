import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSections } from './sectionsSlice';
import SectionAccordion from "./SectionAccordion";
import { Divider } from '@material-ui/core';

export const SectionsContainer = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.sections);
  const restaurantId = parseInt(props.menu?.attributes.restaurant_id)
  const menuId = parseInt(props.menu?.id)

  useEffect(() => {
    if (props && props.menu) {
      dispatch(fetchSections({restaurantId: props.menu.attributes.restaurant_id, menuId: menuId}))
    }
  }, [dispatch, props, menuId])

  const sections = Object
  .entries(useSelector((state) => state.sections.entities))
  .flat()
  .filter(element => typeof element === 'object')
  .filter(section => section.attributes.menu_id === menuId);

  const sectionsList = sections.map((section) => {
    return (
      <div key={section.id}>
        <SectionAccordion square={true} key={section.id} restaurant_id={restaurantId} menuId={menuId} section={section} />
        <Divider></Divider>
      </div>
    )
  })

  switch (status) {
    case 'idle':
      return null;
    case 'loading':
      return (<div>Loading...</div>)
    case 'succeeded':
      return (
        <div>
          { sectionsList }
        </div>
      )
    case 'failed':
      return (<div>{error}</div>)
    default:
      return (<div>Unknown error</div>)
  }
}

SectionsContainer.propTypes = {
  menu: PropTypes.object,
}

export default SectionsContainer;