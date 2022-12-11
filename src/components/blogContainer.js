import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Blog from "./pages/Blog";
import Map from "./pages/Map";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

export default function BlogContainer() {
  const [currentPage, setCurrentPage] = useState("Blog");

  const renderPage = () => {
    if (currentPage === "Map") {
      return <Map />;
    }
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Blog />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </>
  );
}
