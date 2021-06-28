import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import marked from "marked";
import LoadingComponent from "./LoadingComponent";
import Author from "./Author";
import Post from "./Post";
import WikiEntry from "./WikiEntry";

import "./SearchResult.css";

const SearchResult = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { keyword } = useParams();
  console.log(keyword);

  useEffect(() => {
    setIsLoading(true);
    // setIsError(false);

    fetch("http://localhost:3030/search/" + keyword)
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
        // console.log("sarch result: ", jsonResult);
        setIsLoading(false);
        setSearchResult(jsonResult);
      })
      .catch((error) => {
        console.log("Error occured");
        console.error(error);
        setIsLoading(false);
        // setIsError(true);
      });
  }, [keyword]);

  if (isLoading) {
    return <LoadingComponent />;
  } else {
    return (
      <div className="searchResult">
        {searchResult.map((result) => {
          if (result.type === "author") {
            return <Author searchResult={result} />;
          } else if (result.type === "post") {
            return <Post key={result.id} {...result} />;
          } else {
            return <WikiEntry {...result} />;
          }
        })}
      </div>
    );
  }
};

export default SearchResult;
