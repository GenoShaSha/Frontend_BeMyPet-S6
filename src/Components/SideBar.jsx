import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
} from "reactstrap";
import axios from "axios";
import "../Css/SideBar.scss";
import jwtDecode from "jwt-decode";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      role: null,
    };
  }

  componentDidMount() {
    var tok = localStorage.getItem("token");
    if (tok != null) {
      var translator = jwtDecode(tok);
      this.setState({ role: translator.role });
    }
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <Nav className="ml-auto" navbar>
          <span className="logo">Be My Pet</span>
            {this.state.role === "adopter" ? (
              <NavItem>
                <NavLink href="/Dashboard">Dashboard</NavLink>
              </NavItem>
            ): (
              ""
            )}

            {this.state.role === "adopter" ? (
              <NavItem>
                <NavLink href="/AdopterMatches">Status</NavLink>
              </NavItem>
            ): (
              ""
            )}

            {this.state.role === "shelter" ? (
              <NavItem>
                <NavLink href="/ShelterMatches">Adoption Offer</NavLink>
              </NavItem>
            ): (
              ""
            )}

            {this.state.role === null ? (
              <>
              <div className="NavButtons">
                <NavItem>
                  <NavLink href="/SignIn">Sign In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/SignUp">Sign Up</NavLink>
                </NavItem>
                </div>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink href="/SignOut">Sign Out</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default SideBar;
