import React from "react";

const Comment = ({ email, content, src }) => {
  return (
    <div className="comment">
      <div>
        <img src={src} alt="profile" />
      </div>
      <div>
        <h3>{email}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
