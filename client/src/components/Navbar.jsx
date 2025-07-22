import React, { useEffect, useState } from "react";
import Login from "../components/GoogleAuth/Login";
import Logout from "../components/GoogleAuth/Logout";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const forumUser = useSelector((state) => state.users.forumUser);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();
  const pathname = location.pathname;
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOthersOpen(false);
  }, [pathname]);

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const closeOthersDropdownWithDelay = () => {
    setTimeout(() => {
      setIsOthersOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2000);
  };

  const navLinkClasses = (path) =>
    `relative py-2 px-2 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 
     after:bg-pink-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 
     hover:after:scale-x-100 ${pathname === path
      ? "after:scale-x-100 font-semibold text-pink-600 dark:text-pink-400"
      : ""
    }`;

  const navItems = (
    <>
      <li><Link to="/" className={navLinkClasses("/")}>Home</Link></li>
      <li><Link to="/course" className={navLinkClasses("/course")}>Academics</Link></li>
      <li><Link to="/buy-sell-home" className={navLinkClasses("/buy-sell-home")}>Buy & Sell</Link></li>
      <li><Link to="/disc_forum_homepage" className={navLinkClasses("/disc_forum_homepage")}>Discussion Forum</Link></li>
      <li><Link to="/clubs" className={navLinkClasses("/clubs")}>Clubs & Communities</Link></li>
      <li className="dropdown dropdown-hover">
        <details
          className="dropdown"
          open={isOthersOpen}
          onClick={() => setIsOthersOpen(!isOthersOpen)}
        >
          <summary className="cursor-pointer py-2 px-2">Others</summary>
          <ul className="p-2 bg-white dark:bg-slate-800 shadow rounded-md z-50 w-44 text-black dark:text-white">
            <li>
              <Link to="/sport" className={navLinkClasses("/sport")} onClick={closeOthersDropdownWithDelay}>Sports</Link>
            </li>
            <li>
              <a
                href="https://www.bitotsav.com"
                target="_blank"
                rel="noreferrer"
                className="block px-2 py-1 hover:bg-gray-200 dark:hover:bg-slate-700 rounded"
                onClick={closeOthersDropdownWithDelay}
              >
                Bitotsav
              </a>
            </li>
            <li>
              <Link to="/downloads" className={navLinkClasses("/downloads")} onClick={closeOthersDropdownWithDelay}>Downloads</Link>
            </li>
            <li>
              <Link to="/tools/cgpa-calculator" className={navLinkClasses("/tools/cgpa-calculator")} onClick={closeOthersDropdownWithDelay}>
                CGPA Calculator
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className={`w-full sticky top-0 z-50 bg-white bg-opacity-95 dark:bg-slate-900 dark:text-white ${sticky ? "shadow-md dark:bg-slate-800 transition-all duration-300 ease-in-out" : ""}`}>
      <div className="max-w-screen-2xl container mx-auto md:px-5">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white dark:bg-slate-800 text-black dark:text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navItems}
              </ul>
            </div>
            <a href="/" className="text-3xl font-bold cursor-pointer text-pink-500">BiTKiT</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3">{navItems}</ul>
          </div>

          <div className="navbar-end space-x-3">
            {/* Theme Switcher */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" />
              <svg
                className="swap-off h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="..." />
              </svg>
              <svg
                className="swap-on h-8 w-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="..." />
              </svg>
            </label>

            {/* Auth Buttons */}
            {forumUser ? (
              <div className="flex items-center gap-2">
                <Logout />
                <div className="user-menu flex items-center gap-2 ml-4">
                  <Avatar
                    alt={forumUser?.displayName}
                    src={forumUser?.photoURL || ""}
                    className="w-10 h-10"
                  />
                  <span className="hidden md:inline text-lg font-medium text-gray-700 dark:text-white">
                    {forumUser?.displayName?.split(" ")[0]}
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <a
                  className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() => document.getElementById("my_modal_5").showModal()}
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
