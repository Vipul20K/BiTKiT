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
  <div className="stack-index dark:bg-gray-900 dark:text-white min-h-screen w-full">
  <div className="flex flex-col md:flex-row w-full min-h-screen">
    
    {/* Sidebar: sticky only on md+ screens */}
    <div className="w-full md:w-[240px] md:h-screen md:sticky md:top-0 md:block hidden border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800">
      <Sidebar />
    </div>

    {/* Main: scrollable only when sidebar is fixed */}
    <div className="flex-1 overflow-y-auto">
      <Main questions={questions} onDelete={handleDeleteFromState} />
    </div>
  </div>
</div>

  );
}

export default Index;
