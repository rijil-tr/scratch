import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import RouteNavItem from './containers/RouteNavItem';
import Routes from './Routes';
import './App.css';

class App extends Component {
  handleNavLink = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  };
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem onClick={this.handleNavLink} href="/signup">
                Signup
              </RouteNavItem>
              <RouteNavItem onClick={this.handleNavLink} href="/login">
                Login
              </RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
