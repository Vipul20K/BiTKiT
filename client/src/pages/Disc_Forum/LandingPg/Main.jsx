
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import { motion } from "framer-motion"; 

function Main({ questions, onDelete }) {
  const [filter, setFilter] = useState("Newest");
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  useEffect(() => {
    const sorted = [...questions];

    switch (filter) {
      case "Most Viewed":
        sorted.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case "Most Voted":
        sorted.sort((a, b) => (b.votes || 0) - (a.votes || 0));
        break;
      case "Unanswered":
        setFilteredQuestions(sorted.filter(q => !q.answerDetails || q.answerDetails.length === 0));
        return;
      case "Newest":
      default:
        sorted.sort(
          (a, b) => new Date(b.createdAt || b.created_at) - new Date(a.createdAt || a.created_at)
        );
    }

    setFilteredQuestions(sorted);
  }, [questions, filter]);

  return (
    <div className="flex flex-col flex-1 py-6 px-3 sm:py-10 sm:px-8 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-3">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold sm:font-bold text-blue-700 dark:text-blue-300 leading-tight">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ConnectWithoutContactTwoToneIcon
              fontSize="large"
              className="text-blue-600 dark:text-blue-400 animate-pulse"
            />
            <span className="font-serif text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300">
              Join the Conversation | Share Insights
            </span>
          </motion.div>
        </h2>
        <Link to="/add-question" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base rounded-md shadow hover:shadow-lg transition-all">
            Ask Question
          </button>
        </Link>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-300 dark:border-gray-700 pb-3 sm:pb-4 mb-3 sm:mb-5 gap-3">
        <p className="text-sm sm:text-lg font-semibold text-gray-700 dark:text-gray-200 ml-1">
          {filteredQuestions.length} {filteredQuestions.length === 1 ? "Question" : "Questions"}
        </p>
        <div className="flex gap-2 sm:flex-nowrap flex-wrap sm:overflow-x-auto overflow-x-auto scrollbar-hide bg-gray-100 dark:bg-gray-800 p-4 rounded-full shadow-inner">
          {["Newest", "Most Viewed", "Most Voted", "Unanswered"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm rounded-full whitespace-nowrap transition-all duration-300 focus:outline-none ${
                filter === tab
                  ? "bg-blue-600 text-white shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-200 dark:hover:bg-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Questions List */}
      <div className="space-y-4 sm:space-y-6">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, index) => (
            <div
              key={q._id || index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-5 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <AllQuestions question={q} onDelete={onDelete} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8 text-sm sm:text-base">
            No questions found.
          </p>
        )}
      </div>
    </div>
  );
}

export default Main;
