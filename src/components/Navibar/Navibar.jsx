import React from 'react';
import './Navibar.css'
import nurpressLogo from '../../img/nurpress-logo.png'
import searchIcon from '../../img/searchIcon.png'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navibar = () => {
  return (
    <div>
      <div>
        <div className="navibar">
          <div className="search-icon-block">
            <div>
              <BurgerMenu />
            </div>
          </div>
          {/* <div className="navbar-logo-block">
            <div style={{ display: "flex", justifyContent: "center"}}>
              <Link to="/">
                <img className="navbar-logo-img" src={nurpressLogo} alt="" />
              </Link>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Navibar;