import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          {/* <img src=""/> */}
          <Link to="/">
          <h2>Discussion Forum</h2>
          </Link>
          
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;