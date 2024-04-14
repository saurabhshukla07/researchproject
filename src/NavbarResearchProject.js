import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavbarResearchProject() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" style={{color:'green'}}>Research</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Close
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavbarResearchProject;