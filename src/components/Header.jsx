import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-violet-700 font-semibold"
          >
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">statistics</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl text-violet-700 font-bold"
        >
          PrimoQuiz
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-violet-700 font-semibold">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/topics">Topics</NavLink>
          </li>
          <li>
            <NavLink to="/statistics">statistics</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
