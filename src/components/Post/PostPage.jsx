import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostPage extends Component {
  render() {
    return (
      <div>
        <h3>PostPage</h3>
        <Link to="/">Page post</Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam id eius
          sunt aperiam est. Non ipsa eligendi fuga commodi. Blanditiis atque
          modi eum illum nulla adipisci hic ullam dolores ea.
        </p>
      </div>
    );
  }
}

export default PostPage;
