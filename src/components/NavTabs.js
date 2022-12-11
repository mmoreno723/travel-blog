import React from "react";
import "../../src/style.css";
const inheritColor = {
  color: "inherit",
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <div class="leftNavBar">
        <li>
          <a
            href="#blog"
            onClick={() => handlePageChange("Blog")}
            style={inheritColor}
          >
            BLOG
          </a>
        </li>
        <li>
          <a
            href="#map"
            style={inheritColor}
            onClick={() => handlePageChange("Map")}
          >
            MAP
          </a>
        </li>
      </div>
      <h1>Travel Blog</h1>
      <div class="rightNavBar">
        <li>
          <a
            href="#aboutMe"
            style={inheritColor}
            onClick={() => handlePageChange("AboutMe")}
          >
            ABOUT ME
          </a>
        </li>
        <li>
          <a
            href="#contact"
            style={inheritColor}
            onClick={() => handlePageChange("Contact")}
          >
            CONTACT
          </a>
        </li>
      </div>
    </header>
  );
}

export default NavTabs;
