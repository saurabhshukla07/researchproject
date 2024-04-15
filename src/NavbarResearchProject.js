import Container from 'react-bootstrap/Container';
import { IoEarthOutline } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";
import { LiaQuoteRightSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GrEbay } from 'react-icons/gr';


function NavbarResearchProject() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <IoEarthOutline style={{color:'green'}}/>
        <Navbar.Brand href="#home" style={{color:'green'}}>Research</Navbar.Brand>
        <div className='logo'>
        <GrNotes></GrNotes>
        <LiaQuoteRightSolid></LiaQuoteRightSolid>
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <IoMdClose></IoMdClose>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



export default NavbarResearchProject;