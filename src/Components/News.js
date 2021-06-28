import React, { useState, useEffect } from "react";
import Post from "./Post";
import Error from "./Error";
import LoadingComponent from "./LoadingComponent";

const News = (postArgument) => {
  console.log(postArgument);
  const [posts, setPosts] = useState(postArgument.posts);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (postArgument.posts) {
      console.log("postArgument", postArgument);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setIsError(false);

      fetch("http://localhost:3030/post")
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
          console.log("Posts: ", jsonResult);
          setIsLoading(false);
          setPosts(jsonResult);
        })
        .catch((error) => {
          console.log("Error occured");
          console.error(error);
          setIsLoading(false);
          setIsError(true);
        });
    }
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  } else if (isError) {
    return <Error />;
  } else {
    return (
      <>{posts && posts.map((item) => <Post key={item.id} {...item} />)}</>
    );
  }
};

export default News;
