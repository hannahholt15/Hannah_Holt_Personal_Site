import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavbarContainer } from "./Style"

const MainNavbar = () => (
    <>
        <Navbar className='main-font'
            collapseOnSelect 
            expand="lg" 
            bg="dark" 
            variant="dark"
            as={NavbarContainer}
            >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <Nav.Link href="/contactme">Contact</Nav.Link>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item 
                            href="https://github.com/hannahholt15"
                            target="_blank"
                            rel="noopener noreferrer"  
                        >
                            GitHub
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Header>Web Development</NavDropdown.Header>
                        <NavDropdown.Item 
                            href="https://github.com/hannahholt15/ror_todo_listwint22"
                            target="_blank"
                            rel="noopener noreferrer"    
                        >
                            ToDo List (In Development)
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            href="https://github.com/hannahholt15/cat_cafe"
                            target="_blank"
                            rel="noopener noreferrer"    
                        >
                            Cat Cafe (In Development)
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <NavDropdown title="Blog" id="collasible-nav-dropdown">
                        <NavDropdown.Item 
                            href="https://github.com/hannahholt15"
                            target="_blank"
                            rel="noopener noreferrer"     
                        >
                            GitHub
                        </NavDropdown.Item>
                        <NavDropdown.Item 
                            href="https://www.linkedin.com/in/hannah-holt-/"
                            target="_blank"
                            rel="noopener noreferrer"     
                        >
                            LinkedIn
                        </NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Link eventKey={2} href="/contact">
                        Contact  Me
                    </Nav.Link> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
)

export default MainNavbar;