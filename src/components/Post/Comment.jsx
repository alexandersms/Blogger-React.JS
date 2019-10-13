import React from "react";

const Comment = props => {
  return (
    <div className="comment">
      <div>
        <img src="" alt="profile" />
      </div>
      <div>
        <h3>{props.email}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Comment;
