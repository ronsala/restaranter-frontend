import SectionsContainer from '../sections/SectionsContainer'

export const Menu = (props) => {
  return (
    <div>
      {props.menu?.attributes.name}
      <SectionsContainer menu={props.menu} />
    </div>
  )
}

export default Menu;