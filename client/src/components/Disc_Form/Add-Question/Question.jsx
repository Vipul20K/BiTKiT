import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from 'react-tag-input-component';
import './Question.css';

function Question() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend or state management system
        console.log({ title, body, tags });
        // Reset form after submission
        setTitle("");
        setBody("");
        setTags([]);
    };

    return (
        <div className="add-question">
            <div className="add-question-container">
                <div className="head-title">
                    <h2>Ask Question</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="question-container">
                        <div className="question-options">
                            <div className="question-option">
                                <div className="title">
                                    <h3>Title</h3>
                                    <small>Be specific and imagine you're asking a question to another person</small>
                                    <input 
                                        type="text" 
                                        placeholder="Add question title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="question-option">
                                <div className="body">
                                    <h3>Body</h3>
                                    <small>Include all the info someone would need to answer your question</small>
                                    <ReactQuill 
                                        className="react-quill" 
                                        theme="snow" 
                                        placeholder="Add question body"
                                        value={body}
                                        onChange={setBody}
                                    />
                                </div>
                            </div>
                            <div className="question-option">
                                <div className="tags">
                                    <h3>Tags</h3>
                                    <small>Add tags to describe what your question is about</small>
                                    <TagsInput 
                                        value={tags}
                                        onChange={setTags}
                                        name="tags" 
                                        placeHolder="press enter to add new tag"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button">Add your question</button>
                </form>
            </div>
        </div>
    );
}

export default Question;
