import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


function Navbar2() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Gaming Gear</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"><Button label={'Inicio'} background={'rgb(206, 66, 46)'} action={() => console.log('Se muestra la página index')}/></Nav.Link>
                    <Nav.Link href="#link"><Button label={'Componentes'} background={'rgb(206, 66, 46)'} action={() => console.log('Se muestran los componentes')}/></Nav.Link>
                    <NavDropdown title="Equipos" id="basic-nav-dropdown" onClick={() => console.log('Se muestran los equipos disponibles')}>
                        <NavDropdown.Item href="#action/3.1">Notebook</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">PS5/XBOX</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">PC</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default Navbar2;