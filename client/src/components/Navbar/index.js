import React, { Component } from "react";
import BooksICON from "../../images/stack-of-books.png";

import { Link } from "react-router-dom";
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class Toolbar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
          <img style={{height:'75px', fontFamily: 'Volkhov'}} src={BooksICON}   alt="Stack of Books" />
          Book Hunt
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Git Repo</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/">Linked In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/">Portfolio</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  
  export default Toolbar;