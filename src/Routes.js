import React from "react";
import HomePage from "./components/Home/HomePage";
import PostPage from "./components/Post/PostPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post" component={PostPage} />
      </div>
    </Router>
  );
};

export default Routes;
