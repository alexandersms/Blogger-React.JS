import React, { Component } from "react";
import HomePage from "./HomePage";
import PostPage from "./PostPage";

export class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <PostPage />
      </div>
    );
  }
}

export default App;
