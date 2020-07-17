import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";


export default class Navingation extends Component {    
    
    render() {        
        const navbar = {
            color: "white",     
            position: "fixed",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            backgroundcolor: "#212529"
          };            
              
        const brand = {            
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",            
            fontSize: "0.75rem",
            color: "#fed136",
            fontWeight: "700",
            letterSpacing: "0.0625em",
            textTransform: "uppercase"
        }
        const navbarToggler = {
            padding: "0.75rem",
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            fontSize: "0.75rem",
            color: "#fff",
            textTransform: "uppercase",
            backgroundColor: "#fed136",
            border: "0",
        }
        const img= {
            height: "1.5rem"
        }
        const navItem = {
            fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
            width: "100%",
            fontSize: "0.95rem",
            color: "#fff",
            letterSpacing: "0.0625em"
        }
        const navbarCollaps = {            
            //backgroundColor: `${this.state.navBackground}`,            
        }
        return (
            <div>
                <Navbar fixed="top" 
                        collapseOnSelect 
                        expand="lg"
                        id="mainNav"
                        className="navbar-default">
                <Navbar.Brand href="#home-top" style={brand}>
                    <a style={brand} href="#page-top"><img style={img} src={ require(`../../assets/image/navbar-logo.svg`) } alt="" /></a>                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={navbarToggler} >Menu</Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" style={navbarCollaps}>
                    <Nav className="justify-content-end navbar-nav text-uppercase ml-auto" style={{width: "100%"}} >
                        <Nav.Link href="#services" >
                            <a className="nav-link js-scroll-trigger" href="#services" style={navItem} >Services</a>
                        </Nav.Link>
                        <Nav.Link href="#portfolio" >
                            <a className="nav-link js-scroll-trigger" href="#portfolio" style={navItem}>Portfolio</a>
                        </Nav.Link>
                        <Nav.Link href="#about" >
                            <a className="nav-link js-scroll-trigger" href="#about" style={navItem}>About</a>
                        </Nav.Link>
                        <Nav.Link href="#team"  className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#team" style={navItem}>Team</a>
                        </Nav.Link>
                        <Nav.Link href="#contact" >
                            <a className="nav-link js-scroll-trigger" href="#contact" style={navItem}>Contact</a>
                        </Nav.Link>                        
                    </Nav>                    
                </Navbar.Collapse>
                </Navbar>

                {/* <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={ require(`../../assets/image/navbar-logo.svg`) } alt="" /></a>
                        <button className="navbar-toggler navbar-toggler-right" 
                                type="button" data-toggle="collapse" 
                                data-target="#navbarResponsive" 
                                aria-controls="navbarResponsive" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation">
                            Menu
                            <i className="fa fa-bars ml-1"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#team">Team</a></li>
                                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav> */}
            </div>
        )
    }
}
