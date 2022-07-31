import React from "react";
import Line from "../Line/Line";
import "./NavBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <ul>
        <Line />

        <li>
          <CustomLink to="/webDev101/about" className="tab">
            About the Author
          </CustomLink>
        </li>
        <Line />

        <li>
          <CustomLink to="/webDev101/outcomes" className="tab">
            Course Learning Outcomes
          </CustomLink>
        </li>
        <Line />

        <li>
          <CustomLink to="/webDev101/contents" className="tab">
            Contents
          </CustomLink>
        </li>
        <Line />

        <li>
          <CustomLink to="/webDev101/results" className="tab">
            Student's Project
          </CustomLink>
        </li>
        <Line />
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
