import SectionsContainer from '../sections/SectionsContainer'

export const Menu = (props) => {
  return (
    <div>
      <SectionsContainer menu={props.menu} />
    </div>
  )
}

export default Menu;