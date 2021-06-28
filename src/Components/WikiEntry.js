import React from "react";
import "./Crypto.css";
import marked from "marked";

const WikiEntry = (content) => {
  console.log("WikiEntry: ", content);
  return (
    <div className="cryptoDescription">
      <h1>{content.title}</h1>
      <img src={content.image} alt="Img" />
      <section
        dangerouslySetInnerHTML={{ __html: marked(content.description) }}
      />
    </div>
  );
};

export default WikiEntry;
