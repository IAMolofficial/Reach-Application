import React from "react";
import Home from "./Home";
import Career from "./Career";
import Contact from "./Contact"
import Logo from './Logo.png'
import './/navbar.css'
const Navbar = () => {
  return (
    <div>
      {/* logo */}
      <div className='Logo'>
<img src={Logo} alt="Logo" />
    </div>
      {/* Navbar */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            About the App
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Career
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            Contact us
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex="0"
        >
        <Home/>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <Career/>
        </div>
        <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabIndex="0"
        >
        <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
