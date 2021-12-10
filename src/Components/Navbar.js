import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Navbar, Container, Nav, FormControl, Form } from 'react-bootstrap';
import aiesecLogo from '../Images/aiesecLogo.svg';
import but from '../Images/Xbutton.svg';
import arrow from '../Images/arrow.svg';
import searchIcon from '../Images/searchIcon.svg';
import '../Navbar.css';


const NavBar = () => {
 
 
  const [isShown, setIsShown] = useState(false);
  const [spoun, setSpoun] = useState(true);
  const [hideNavbar, setHideNavbar] = useState(true);

  const showSearchHandler = () => {   
      setIsShown(true);
      setSpoun(false);
    }
  const HideSearchHandler = () => {
   const timer = setTimeout(() => {
      setIsShown(false);
      setSpoun(true);
    }, 500);
   return () => clearTimeout(timer);
  }
  
  const CloseHandler = () => {
    setHideNavbar(false);
  }


    return (
 <div className="sticky-top" > 
  {hideNavbar && <Navbar bg="white" className="padd">
    <Container fluid className="justify-content-start">
    <span className="ms-5 Bould">covid-19 notice :</span>
    <span className="ms-4 spoun">Current Safety Information</span>
   <Nav.Link className="ms-5" eventKey="link-1">read more</Nav.Link>
  <img src={arrow} alt='arrow' height="10" weight="15" style={{marginTop: '0.1rem'}} />
    </Container>
  <img src={but} style={{marginRight: '0.75rem'}} alt='button' onClick={CloseHandler} />  
</Navbar> }


   {/*Second Navbar*/}
 <Navbar className="nuv padd" bg="white" expand="lg">
  <Container fluid>
  <Navbar.Brand href="/aiesecsite">
      <img
        src={aiesecLogo}
        width="60%"
        className="d-inline-block align-middle ms-5"
        alt="aiesec logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse>
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link style ={{color: "black"}} className="mx-2" href="/FourYouth">Four Youth</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="/Offices">Offices</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="/Events">Events</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="/Blog">Blog</Nav.Link>
        <Nav.Link style ={{color: "black"}} className="mx-2" href="/AboutUs">About us</Nav.Link>
      </Nav>
      <Form className="d-flex" >
     {spoun && <span className="me-5 nav-link" onMouseEnter={showSearchHandler} >Search</span> } 
     {isShown && 
     <>
      <img style={{marginLeft: "0.5rem", position: "absolute", marginTop: "0.5rem"}} width="20px" src={searchIcon} alt="searchIcon" />
      <FormControl
      type="search"
      placeholder="     Search for an Opportenity"
      className="me-5 firstplaceholder"
      aria-label="Search"
      onMouseOut={HideSearchHandler}
    />
    </>
     }
     
     </Form>
      <Button size="lg" variant="primary">APPLY NOW</Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

 </div>
    );
  
}
export default NavBar;