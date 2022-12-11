import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <div class="leftNavBar">
        <li>
          <a href="#blog" style="color: inherit">
            BLOG
          </a>
        </li>
        <li>
          <a href="#map" style="color: inherit">
            MAP
          </a>
        </li>
      </div>
      <h1>Travel Blog</h1>
      <div class="rightNavBar">
        <li>
          <a href="#aboutMe" style="color: inherit">
            ABOUT ME
          </a>
        </li>
        <li>
          <a href="contact" style="color: inherit">
            CONTACT
          </a>
        </li>
      </div>
    </header>
  );
}

export default NavTabs;
