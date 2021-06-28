import React from "react";
import "./Post.css";
import marked from "marked";
import { Link } from "react-router-dom";
var { DateTime } = require("luxon");

const Post = (item) => {
  console.log("Item in Post", item.myText);
  const author = item.author;
  const picture = author && author.image;

  const postText = marked(item.mytext);
  return (
    <div className="post">
      <div className="post_header">
        <Link className="user" to={author && "/authors/" + author.name}>
          <img src={picture && picture} alt={author && author.name} />
          <p className="username">{author && author.name}</p>
        </Link>
        <p className="data">
          {DateTime.fromISO(item.createdAt)
            .setLocale("de")
            .toLocaleString(DateTime.DATETIME_SHORT)}
        </p>
      </div>
      <h2 className="title">{item.title}</h2>
      <p className="shortText">{item.shorttext}</p>
      {item && <img className="postImage" src={item.image} alt="Img" />}
      <section dangerouslySetInnerHTML={{ __html: postText }} />
    </div>
  );
};

export default Post;
