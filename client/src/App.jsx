// import React from "react";
// import "./App.css";
// import Header from "./pages/Disc_Forum/Header/Header.jsx";
// import LandingPg from "./pages/Disc_Forum/LandingPg";
// import ViewQuestion from "./pages/Disc_Forum/ViewQuestion";
// import Question from "./pages/Disc_Forum/Add-Question/Question";
// // import {Route, Routes} from 'react-router-dom';
// import { useLocation } from "react-router-dom";
// import Login from "./components/GoogleAuth/Login.jsx";
// import Tags from "./pages/Disc_Forum/Tags";
// import ViewQnByTags from "./pages/Disc_Forum/ViewQnByTags";

// import Home from "./pages/Home/Home.jsx";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Courses from "./pages/academics/courses/Courses.jsx";
// import CSE from "./pages/academics/branches/CSE.jsx";
// import CseSem1 from "./pages/academics/branches/CSE-dept/CseSem1.jsx";
// import CseSem2 from "./pages/academics/branches/CSE-dept/CseSem2.jsx";
// import AIML from "./pages/academics/branches/AIML.jsx";
// import ECE from "./pages/academics/branches/ECE.jsx";
// import EEE from "./pages/academics/branches/EEE.jsx";
// import ME from "./pages/academics/branches/ME.jsx";
// import MechSem1 from "./pages/academics/branches/Mech-dept/MechSem1.jsx";
// import MechSem2 from "./pages/academics/branches/Mech-dept/MechSem2.jsx";
// import CHEMICAL from "./pages/academics/branches/CHEMICAL.jsx";
// import CIVIL from "./pages/academics/branches/CIVIL.jsx";
// import BIOTECH from "./pages/academics/branches/BIOTECH.jsx";
// import PRODUCTION from "./pages/academics/branches/PRODUCTION.jsx";
// import FOOD from "./pages/academics/branches/FOOD.jsx";
// import CseSem3 from "./pages/academics/branches/CSE-dept/CseSem3.jsx";
// import CseSem4 from "./pages/academics/branches/CSE-dept/CseSem4.jsx";
// import CseSem5 from "./pages/academics/branches/CSE-dept/CseSem5.jsx";
// import CseSem6 from "./pages/academics/branches/CSE-dept/CseSem6.jsx";
// import Clubs_Comm from "./pages/Clubs&Comm/Clubs_Comm.jsx";

// import Navbar from "./components/Navbar.jsx";
// import Footer from "./components/Footer.jsx";
// // import { Toaster } from 'react-hot-toast';
// // import { useAuth } from "./Components/context/AuthProvide.jsx";

// import About from "./pages/about/About.jsx";
// import FAQS from "./pages/faqs/FAQS.jsx";
// import Contact from "./pages/contact/Contact.jsx";
// import Sports from "./pages/sports&activity/Sports.jsx";
// import Error from "./pages/ErrorPage/Error.jsx";
// import Download from "./pages/downloads/Download.jsx";
// // import Clubs_Comm from "./Clubs&Comm/Clubs_Comm.jsx";

// import BuySellHome from "./pages/Buy_Sell/Home";
// // import Register from "./pages/Buy_Sell/Register";
// // import ProtectedPage from "./components/ProtectedPage";
// import Spinner from "./components/Spinner";
// import { useDispatch } from "react-redux";
// import { setUser } from "./redux/usersSlice";
// // import { useSelector } from "react-redux";
// import Profile from "./pages/Buy_Sell/Profile";
// import Admin from "./pages/Buy_Sell/Admin";
// import ProductInfo from "./pages/Buy_Sell/ProductInfo";
// import { jwtDecode } from "jwt-decode";

// import { useEffect } from "react";
// import { analytics } from "./firebase";
// import { logEvent } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import Loader from "./components/Loader.jsx";

// import ProtectedRoute from "./components/ProtectedRoute.jsx";

// function App() {
//   useEffect(() => {
//     if (analytics) {
//       logEvent(analytics, "page_view", {
//         page_path: window.location.pathname,
//       });
//     }
//   }, []);

//   const location = useLocation();

//   const dispatch = useDispatch();

//   // Sync Redux user from localStorage on app load
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       dispatch(setUser(JSON.parse(storedUser)));
//     }
//   }, [dispatch]);

//   return (
//     <div className="App min-h-screen flex flex-col">
//       <Loader />
//       {location.pathname !== "/login" && <Navbar />}
//       <div className="flex-grow">
//         <Routes>


//           {/* Protected Routes */}

//           <Route element={<ProtectedRoute />}>

//             {/* Academic Routes */}
//             <Route path="/course" element={<Courses />} />
//             <Route path="/clubs" element={<Clubs_Comm />} />
//             <Route path="/course/cse" element={<CSE />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/faqs" element={<FAQS />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/sport" element={<Sports />} />
//             <Route path="/err" element={<Error />} />
//             <Route path="/downloads" element={<Download />} />
//             <Route path="/course/cse/cse_sem1" element={<CseSem1 />} />
//             <Route path="/course/cse/cse_sem2" element={<CseSem2 />} />
//             <Route path="/course/cse/cse_sem3" element={<CseSem3 />} />
//             <Route path="/course/cse/cse_sem4" element={<CseSem4 />} />
//             <Route path="/course/cse/cse_sem5" element={<CseSem5 />} />
//             <Route path="/course/cse/cse_sem6" element={<CseSem6 />} />
//             <Route path="/course/aiml" element={<AIML />} />
//             <Route path="/course/ece" element={<ECE />} />
//             <Route path="/course/eee" element={<EEE />} />
//             <Route path="/course/me" element={<ME />} />
//             <Route path="/course/mech/mech_sem1" element={<MechSem1 />} />
//             <Route path="/course/mech/mech_sem2" element={<MechSem2 />} />
//             <Route path="/course/chem" element={<CHEMICAL />} />
//             <Route path="/course/civil" element={<CIVIL />} />
//             <Route path="/course/biotech" element={<BIOTECH />} />
//             <Route path="/course/prod" element={<PRODUCTION />} />
//             <Route path="/course/food" element={<FOOD />} />

//             {/* Buy-Sell Routes */}

//             <Route path="/buy-sell-home" element={<BuySellHome />} />
//             <Route path="/product/:id" element={<ProductInfo />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/admin" element={<Admin />} />

//             {/* Discussion Forum Routes */}
//             <Route path="/login" element={<Login />} />
//             <Route path="/add-question" element={<Question />} />
//             <Route path="/view-question" element={<ViewQuestion />} />
//             <Route path="/disc_forum_homepage" element={<LandingPg />} />
//             <Route path="/tags" element={<Tags />} />
//             <Route path="/tags/:tag" element={<ViewQnByTags />} />

//           </Route>

//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
          
//         </Routes>
//       </div>

//       {location.pathname !== "/login" && <Footer />}
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import CgpaCalculator from "./pages/tools/CgpaCalculator.jsx";
<Route path="/tools/cgpa-calculator" element={<CgpaCalculator />} />


import Header from "./pages/Disc_Forum/Header/Header.jsx";
import LandingPg from "./pages/Disc_Forum/LandingPg";
import ViewQuestion from "./pages/Disc_Forum/ViewQuestion";
import Question from "./pages/Disc_Forum/Add-Question/Question";
import Tags from "./pages/Disc_Forum/Tags";
import ViewQnByTags from "./pages/Disc_Forum/ViewQnByTags";
import BlockUnblockUser from "./components/BlockUnblockUser.jsx";

import Home from "./pages/Home/Home.jsx";
import Courses from "./pages/academics/courses/Courses.jsx";
import CSE from "./pages/academics/branches/CSE.jsx";
import CseSem1 from "./pages/academics/branches/CSE-dept/CseSem1.jsx";
import CseSem2 from "./pages/academics/branches/CSE-dept/CseSem2.jsx";
import AIML from "./pages/academics/branches/AIML.jsx";
import ECE from "./pages/academics/branches/ECE.jsx";
import EEE from "./pages/academics/branches/EEE.jsx";
import ME from "./pages/academics/branches/ME.jsx";
import MechSem1 from "./pages/academics/branches/Mech-dept/MechSem1.jsx";
import MechSem2 from "./pages/academics/branches/Mech-dept/MechSem2.jsx";
import CHEMICAL from "./pages/academics/branches/CHEMICAL.jsx";
import CIVIL from "./pages/academics/branches/CIVIL.jsx";
import BIOTECH from "./pages/academics/branches/BIOTECH.jsx";
import PRODUCTION from "./pages/academics/branches/PRODUCTION.jsx";
import FOOD from "./pages/academics/branches/FOOD.jsx";
import CseSem3 from "./pages/academics/branches/CSE-dept/CseSem3.jsx";
import CseSem4 from "./pages/academics/branches/CSE-dept/CseSem4.jsx";
import CseSem5 from "./pages/academics/branches/CSE-dept/CseSem5.jsx";
import CseSem6 from "./pages/academics/branches/CSE-dept/CseSem6.jsx";

import Clubs_Comm from "./pages/Clubs&Comm/Clubs_Comm.jsx";
import About from "./pages/about/About.jsx";
import FAQS from "./pages/faqs/FAQS.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Sports from "./pages/sports&activity/Sports.jsx";
import Error from "./pages/ErrorPage/Error.jsx";
import Download from "./pages/downloads/Download.jsx";

import BuySellHome from "./pages/Buy_Sell/Home";
import ProductInfo from "./pages/Buy_Sell/ProductInfo";
import Profile from "./pages/Buy_Sell/Profile";
import Admin from "./pages/Buy_Sell/Admin";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/GoogleAuth/Login.jsx";
import Loader from "./components/Loader.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Spinner from "./components/Spinner";

import { useDispatch } from "react-redux";
import { setForumUser, setBuySellUser } from "./redux/usersSlice";

import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";
import AimlSem3 from "./pages/academics/branches/AIML-dept/AimlSem3.jsx";
import AimlSem4 from "./pages/academics/branches/AIML-dept/AimlSem4.jsx";
import AimlSem5 from "./pages/academics/branches/AIML-dept/AimlSem5.jsx";
import AimlSem6 from "./pages/academics/branches/AIML-dept/AimlSem6.jsx";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  // Google Analytics Event
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_path: window.location.pathname,
      });
    }
  }, []);

  // Load users from localStorage into Redux store
  useEffect(() => {
    const forumUser = localStorage.getItem("Users");
    const buySellUser = localStorage.getItem("BuySellUser");

    if (forumUser) {
      dispatch(setForumUser(JSON.parse(forumUser)));
    }
    if (buySellUser) {
      dispatch(setBuySellUser(JSON.parse(buySellUser)));
    }
  }, [dispatch]);

  return (
    <div className="App min-h-screen flex flex-col">
      <Loader />
      {location.pathname !== "/login" && <Navbar />}
      <div className="flex-grow">
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            {/* Academics */}
            <Route path="/course" element={<Courses />} />
            <Route path="/course/cse" element={<CSE />} />
            <Route path="/course/cse/cse_sem1" element={<CseSem1 />} />
            <Route path="/course/cse/cse_sem2" element={<CseSem2 />} />
            <Route path="/course/cse/cse_sem3" element={<CseSem3 />} />
            <Route path="/course/cse/cse_sem4" element={<CseSem4 />} />
            <Route path="/course/cse/cse_sem5" element={<CseSem5 />} />
            <Route path="/course/cse/cse_sem6" element={<CseSem6 />} />
            <Route path="/course/aiml" element={<AIML />} />
            <Route path="/course/aiml/aiml_sem3" element={<AimlSem3 />} />
            <Route path="/course/aiml/aiml_sem4" element={<AimlSem4 />} />
            <Route path="/course/aiml/aiml_sem5" element={<AimlSem5 />} />
            <Route path="/course/aiml/aiml_sem6" element={<AimlSem6 />} />
            <Route path="/course/ece" element={<ECE />} />
            <Route path="/course/eee" element={<EEE />} />
            <Route path="/course/me" element={<ME />} />
            <Route path="/course/mech/mech_sem1" element={<MechSem1 />} />
            <Route path="/course/mech/mech_sem2" element={<MechSem2 />} />
            <Route path="/course/chem" element={<CHEMICAL />} />
            <Route path="/course/civil" element={<CIVIL />} />
            <Route path="/course/biotech" element={<BIOTECH />} />
            <Route path="/course/prod" element={<PRODUCTION />} />
            <Route path="/course/food" element={<FOOD />} />
            <Route path="/clubs" element={<Clubs_Comm />} />

            {/* Static Info */}
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQS />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sport" element={<Sports />} />
            <Route path="/err" element={<Error />} />
            <Route path="/downloads" element={<Download />} />

            {/* Buy & Sell */}
            <Route path="/buy-sell-home" element={<BuySellHome />} />
            <Route path="/product/:id" element={<ProductInfo />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />

            {/* Discussion Forum */}
            <Route path="/add-question" element={<Question />} />
            <Route path="/view-question" element={<ViewQuestion />} />
            <Route path="/disc_forum_homepage" element={<LandingPg />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<ViewQnByTags />} />
            <Route path="/block-user" element={<BlockUnblockUser/>} />
            <Route path="/unblock-user" element={<BlockUnblockUser/>} />
          </Route>

          {/* Login Page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
}

export default App;
