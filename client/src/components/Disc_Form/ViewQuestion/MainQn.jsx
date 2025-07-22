import React, { useState } from "react";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./index.css";


function MainQn(){
    const[show,setShow]=useState(false);
    return (
        <div className="main">
           <div className="main-container">
            <div className="main-top">
                <h2 className="main-question">Qn Title</h2>
                <Link to="/add-question">
                <button>Ask Question</button>
                </Link>
            </div>
            
                <div className="main-desc">
                    <div className="info">
                        <p>Timestamp</p>
                        <p>Active <span>today</span></p>
                        <p>Viewed<span> 45 times</span></p>
                    </div>
                </div>

                <div className="all-questions">
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                                <p className="arrow">⬆️</p>
                                <p className="arrow">0</p>
                                <p className="arrow">⬇️</p>
                                <BookmarkIcon/>
                                <HistoryIcon/>
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is qn body</p>
                            <div className="author">
                                <small>
                                    Asked "Timestamp"
                                    <div className="auth-detalis">
                                        <Avatar/>
                                        <p>Vipul</p>
                                    </div>
                                </small>
                            </div>
                        </div>
                       
                    </div>
        
                </div>
                <div className="comments">
                            <div className="comment">
                                <p>This is a comment by
                                    <span> Username </span>
                                    <small>Timestamp</small>
                                </p>
                            </div>
                            
                            <p onClick={()=>setShow(!show)}>Add a comment</p>
                            {
                                show && (
                                    <div className="title"
                                    >
                                        <textarea 
                                        type="text"
                                        placeholder="Add your comment"
                                        rows={5}
                                        style={{
                                            margin:"5px 0",
                                            padding:"10px",
                                            border:"1px solid rgba(0,0,0,0.2)",
                                            borderRadius:"3px",
                                            outline:"none",
                                        }}
                                        ></textarea>
                                
                                        <button
                                        
                                        style={{
                                            
                                            display:"block",
                                            width:"100%",
                                            maxWidth:"fit-content",
                                        }}
                                        >Add comment</button>
                                      
                                    </div>

                                )
                            }
                        </div>
                <div className="all-questions"
                style={{flexDirection:"column"}}>
                    <p
                    style={{marginBottom:"20px",
                    fontSize:"1.3rem",
                    fontWeight:"300"
                    }}> No. of answers</p>
                    <div className="all-questions-container">
                        <div className="all-questions-left">
                            <div className="all-options">
                                <p className="arrow">⬆️</p>
                                <p className="arrow">0</p>
                                <p className="arrow">⬇️</p>
                                <BookmarkIcon/>
                                <HistoryIcon/>
                            </div>
                        </div>
                        <div className="question-answer">
                            <p>This is qn body</p>
                            <div className="author">
                                <small>
                                    Asked "Timestamp"
                                    <div className="auth-detalis">
                                        <Avatar/>
                                        <p>Vipul</p>
                                    </div>
                                </small>
                            </div>
                        </div>
                        </div>
                        
                </div>
                
           </div>

           <div className="main-answer">
                    <h3 style={{
                        fontSize:"22px",
                        fontWeight:"400",
                        margin:"10px 0" 
                       }}>Your Answer</h3>
                    <ReactQuill className="react-quill" theme="snow"
                    style={{height:"200px"}}/>
                </div>
                <button style={{
                    maxWidth:"fit-content",
                    marginTop:"50px"
                }}>Post your Answer</button>
            
        </div>
    );
}

export default MainQn;