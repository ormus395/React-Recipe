import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <h3>React Recipe</h3>
        <ul className="nav-list">
          <li>New Recipe</li>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
       </div>
    )
  }
}

export default Navbar;