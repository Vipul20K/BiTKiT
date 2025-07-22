

import React, { useEffect, useState } from "react";
import axiosInstance from "../../../utils/axiosInstance";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useSelector } from "react-redux";

function Index() {
  const [questions, setQuestions] = useState([]);
  const { forumUser } = useSelector((state) => state.users); // ✅ Optional (not used directly here)

  useEffect(() => {
    // ✅ Can't make useEffect callback async directly — useEffect expects either a cleanup function or nothing, not a Promise.
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

  return (
  <div className="stack-index dark:bg-slate-800 dark:text-white min-h-screen">
    <div className="stack-index-content flex flex-col md:flex-row w-full">
      <Sidebar className="sidebar dark:bg-slate-800 dark:text-white w-full md:w-[240px] flex-shrink-0" />
      <Main className="main dark:bg-slate-800 dark:text-white flex-1" questions={questions} />
    </div>
  </div>
);
}

export default Index;
