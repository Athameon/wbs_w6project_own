import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import marked from "marked";
import "./Author.css";
import News from "./News";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./Error";

const Author = ({ searchResult }) => {
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  let { name } = useParams();
  if (name === undefined) {
    name = searchResult.name;
  }

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch("http://localhost:3030/author/" + name)
      .then(
        (result) => {
          if (result) {
            return result.json();
          }
          throw Error("Failed to get the data");
        },
        (error) => {
          throw Error("Network Error." + error);
        }
      )
      .then((jsonResult) => {
        console.log("Author: ", jsonResult);
        setIsLoading(false);
        setAuthor(jsonResult);
      })
      .catch((error) => {
        console.log("Error occured");
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, [name]);

  if (isLoading) {
    return <LoadingComponent />;
  } else if (isError) {
    return <ErrorComponent />;
  } else if (author) {
    return (
      <>
        <h1>{author.author.name}</h1>
        <img
          className="profilePicture"
          src={author.author.image}
          alt={author.author.name}
        />
        <section
          className="aboutText"
          dangerouslySetInnerHTML={{ __html: marked(author.author.about) }}
        />
        <hr className="articleSeparator" />
        <h2>Articles composed by {name}:</h2>

        <News posts={author.posts} />
      </>
    );
  } else {
    return <p></p>;
  }
};

export default Author;
