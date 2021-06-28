import React, { useState, useEffect } from "react";
import "./AuthorAdmin.css";
import Error from "./Error";
import LoadingComponent from "./LoadingComponent";
import AuthorAdminSingle from "./AutorAdminSingle";

const AuthorAdmin = (props) => {
  const [authors, setAuthors] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [createNewAuthor, setCreateNewAuthor] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch("http://localhost:3030/author")
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
        console.log("Authors: ", jsonResult);
        setAuthors(jsonResult);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error occured");
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <div>
        <h1 className="title">Author Administration</h1>
        <button onClick={() => setCreateNewAuthor(true)}>Create Author</button>
        {createNewAuthor && (
          <AuthorAdminSingle
            key="newAuthor"
            {...{ name: "", image: "", about: "" }}
          />
        )}
        {authors &&
          authors.items &&
          authors.items.map((author) => (
            <AuthorAdminSingle key={author.id} {...author} />
          ))}
      </div>
    );
  }
};

export default AuthorAdmin;
