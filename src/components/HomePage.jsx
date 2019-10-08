import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h3>HomePage</h3>
        <Link to="/post">Page post</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
          illum corrupti. Voluptatum itaque, laboriosam iste vero quia ratione
          facere praesentium odio omnis vitae iure blanditiis hic tenetur
          commodi, nemo molestiae.
        </p>
      </div>
    );
  }
}

export default HomePage;
