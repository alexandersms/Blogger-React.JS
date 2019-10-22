import React from "react";
import HomePage from "./components/Home/HomePage";
import PostPage from "./components/Post/PostPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Includes/Header";

const Routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostPage} />
      </div>
    </Router>
  );
};

export default Routes;
