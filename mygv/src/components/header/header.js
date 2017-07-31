import React, { Component } from 'react';
import './header.css';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded root">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand">Student Account Dashboard</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>
          <form className="form-inline my-2 my-lg-0">

          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
