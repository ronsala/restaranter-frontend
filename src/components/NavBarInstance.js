import { 
  Navbar,
  Nav,
  Icon,
} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'
import '../index.css';


export const NavBarInstance = () => {

  return (
    <Navbar appearance="inverse">
      <Navbar.Header>
        <a href="/" className="navbar-brand logo">
          RESTAURANTER
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
            Home
          </Nav.Item>
          <Nav.Item eventKey="2">About</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  )
}