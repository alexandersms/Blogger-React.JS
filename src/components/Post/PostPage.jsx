import React, { Component } from "react";
import post from "./Posts/MyPost";
import comments from "./Posts/Comments";
import Comment from "./Comment";
//import { Link } from "react-router-dom";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: post,
      comments: comments
    };
  }

  render() {
    let comments = this.state.comments.map((element, key) => (
      <Comment key={key} email={element.email} content={element.content} />
    ));

    return (
      <div className="container post-container">
        <div className="post">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.description}</p>
        </div>
        <div className="comments-container">
          <h2 className="comments-title">Commentaires</h2>
          {comments}
        </div>
      </div>
    );
  }
}

export default PostPage;
