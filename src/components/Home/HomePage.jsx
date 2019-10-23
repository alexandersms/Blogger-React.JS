import React, { Component } from "react";
import Post from "./Post";
import Loader from "../Includes/Loader";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(response =>
        setTimeout(() => {
          this.setState({
            posts: response
          });
        }, 2000)
      );
  }

  render() {
    // Boucle sur les posts
    let posts = this.state.posts.map((element, key) => (
      <Post
        key={key}
        id={element.id}
        title={element.title}
        description={element.body}
      />
    ));
    return (
      <div>
        <div className="container articles-container">
          {posts.length === 0 ? <Loader /> : posts}
        </div>
      </div>
    );
  }
}

export default HomePage;
