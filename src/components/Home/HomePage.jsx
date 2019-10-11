import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          title: "Lorem ipsum dolor tokoos 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
        },
        {
          title: "Lorem ipsum dolor tokoos 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
        },
        {
          title: "Lorem ipsum dolor tokoos 3",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
        }
      ]
    };
  }

  render() {
    // Boucle sur les posts
    let posts = this.state.posts.map((element, key) => (
      <Post key={key} title={element.title} description={element.description} />
    ));
    return (
      <div>
        <h1>HomePage</h1>
        <div className="container articles-container">{posts}</div>
        <Link to="/post">Page post</Link>
      </div>
    );
  }
}

export default HomePage;
