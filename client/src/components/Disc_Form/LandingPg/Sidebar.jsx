import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          
          <div className="sidebar-option">
          
            <div className="link">
              <div className="link-tag">
              <Link>Home</Link>
             
                {/* <Public /> */}
              </div>
              <div className="link-tag">
              <Link>Question</Link>
              </div>
              <div className='tags'>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;