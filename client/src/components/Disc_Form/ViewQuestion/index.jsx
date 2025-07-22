import React from 'react';
import Sidebar from '../LandingPg/Sidebar';
import MainQn from './MainQn';
import '../LandingPg/index.css';

function index() {
  return (
    <div className='stack-index'>
        <div className='stack-index-content'>      
        <Sidebar/>
        <MainQn/>     
        </div>
  
    </div>
  );
}

export default index;