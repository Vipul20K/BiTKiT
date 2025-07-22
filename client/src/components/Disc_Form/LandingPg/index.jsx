import React from 'react';
import Sidebar from './Sidebar';
import Main from './Main';
import './index.css';

function index() {
  return (
    <div className='stack-index'>
        <div className='stack-index-content'>
            
        <Sidebar className="sidebar"/>
        <Main className="main"/> 
        
        
            
        </div>
  
    </div>
  );
}

export default index;