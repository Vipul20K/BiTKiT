import React from "react";
import {Link} from "react-router-dom";
import "./AllQuestions.css";
import {Avatar} from "@mui/material";

function AllQuestions(){
    return (
      <div className="all-questions">
        <div className="all-questions-container">
          <div className="all-questions-left">
            <div className="all-options">
              <div className="all-option">
                <p>0</p>
                <span>votes</span>
              </div>
              <div className="all-option">
                <p>0</p>
                <span>answers</span>
              </div>
              <div className="all-option">
                <small>0 Views</small>
              </div>
            </div>
          </div>
          <div className="question-answer">
            <Link to="/view-question">Node.js API for TypeScript Types Checking in ".vue" files for 2025</Link>
            <div style={{width:"90%"}}>
                <div>
                I am using the Gulp + Webpack. For the TypeScript type checking of the .vue files
                 currently I am using the old version of fork-ts-checker-webpack-plugin, but from
                  version 8.0.0 fork-ts-checker-webpack-..
                </div>
            </div>
            <div style={{display:"flex"}}>
                <span className="question-tags">tag1</span>
                <span className="question-tags">tag2</span>     
                <span className="question-tags">tag3</span>     
            </div>
            
              <div className="author">
               
                <div className="author-details">
                  <Avatar/>
                  <p>User name</p>
                  <small>Timestamp</small>
                </div>
                
               </div>
          </div>
        </div>
      </div>
    );
}

export default AllQuestions;