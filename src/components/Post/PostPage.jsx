import React, { Component } from "react";
import post from "./Posts/MyPost";
import comments from "./Posts/Comments";
import Comment from "./Comment";
import ProfileImage from "../../img/profile.png";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: post,
      comments: comments
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(response => response.json())
      .then(response =>
        this.setState({
          post: response
        })
      );
    fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
      .then(response => response.json())
      .then(response =>
        this.setState({
          comments: response
        })
      );
  }

  render() {
    let comments = this.state.comments.map((element, key) => (
      <Comment
        key={key}
        email={element.email}
        content={element.body}
        src={ProfileImage}
      />
    ));

    return (
      <div className="container post-container">
        <div className="post">
          <h2>{this.state.post.title}</h2>
          <p>{this.state.post.body}</p>
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
