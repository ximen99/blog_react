import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "index.css";
import BlogLayout from "Blog_page/BlogLayout";
import About from "Blog_page/About";
import Blog from "Blog_page/Blog";
import Article from "Blog_page/Article";
import MainGameLayout from "ThreeDGame_page/MainGameLayout";

const root = createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      {/* <Route path="/" element={<BlogLayout />}>
        <Route exact path="/blog" element={<Blog />} />
        <Route path="/About" element={<About />} />
        <Route path="blog/:articleHtml" element={<Article />} />
        <Route index element={<Blog />} />
      </Route> */}
      <Route path="/" element={<MainGameLayout />} />
    </Routes>
  </Router>
);
