import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

//import file from foleder

//importing css
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabSection.css';
function TabSection() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        {/* <img src={Mylogo} className="mylogo"></img> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/abt">About</Nav.Link>
                        <Nav.Link href="/edu">Education</Nav.Link>
                        <Nav.Link e href="/exp">
                            Experience
                        </Nav.Link>
                        <Nav.Link e href="/pro">
                            Project
                        </Nav.Link>
                        <Nav.Link href="/con">Contact</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        </div>
    );
}

export default TabSection;
