import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../../utils/axiosInstance";
import Sidebar from "./Sidebar";
import Main from "./Main";



function Index() {
  const [questions, setQuestions] = useState([]);
  const { forumUser } = useSelector((state) => state.users); // ✅ Optional (not used directly here)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axiosInstance.get("/forum/questions");
        setQuestions(res.data.reverse());
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };
    fetchQuestions();
  }, []);

  // Handler to remove a question from state after deletion
  const handleDeleteFromState = (id) => {
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  return (
    <div className="stack-index dark:bg-slate-800 dark:text-white min-h-screen">
      <div className="stack-index-content flex flex-col md:flex-row w-full">
        <Sidebar className="sidebar dark:bg-slate-800 dark:text-white w-full md:w-[240px] flex-shrink-0" />
        <div className="main dark:bg-slate-800 dark:text-white flex-1">
          <Main questions={questions} onDelete={handleDeleteFromState} />
        </div>
      </div>
    </div>
  );
}

export default Index;
