import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './NavBar.css'


function NavBar() {
    return (
        <Navbar className='Nav' expand="lg">
            <Container>
                <Navbar.Brand id='brand'>Gaming Gear</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to='/'><Button label={'Inicio'} background={'rgb(206, 66, 46)'} action={() => console.log('Se muestra la página index')}/></Link>
                    <Link to={`/category/component`}><Button label={'Componentes'} background={'rgb(206, 66, 46)'} action={() => console.log('Se muestran los componentes')}/></Link>
                    <NavDropdown title="Equipos" id="basic-nav-dropdown" onClick={() => console.log('Se muestran los equipos disponibles')}>
                        <NavDropdown.Item><Link to={`/category/notebook`}>Notebook</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={`/category/console`}>PS5/XBOX</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={`/category/pc`}>PC</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;