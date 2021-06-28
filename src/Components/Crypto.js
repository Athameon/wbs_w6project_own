import React, { useState, useEffect } from "react";
import CryptoInfo from "./CryptoInfo";
import { useParams } from "react-router-dom";
import marked from "marked";
import LoadingComponent from "./LoadingComponent";
import { Redirect } from "react-router-dom";

import "./Crypto.css";
import WikiEntry from "./WikiEntry";

const Crypto = ({ currentData }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    fetch("http://localhost:3030/wiki/" + id)
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
        console.log("Wiki: ", jsonResult);
        setIsLoading(false);
        setContent(jsonResult);
      })
      .catch((error) => {
        console.log("Error occured");
        console.error(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, [id]);

  const currentCryptoInfo =
    currentData &&
    currentData.filter((item) => item.id.toLowerCase() === id)[0];

  return (
    <div className="cryptoContainer">
      <div>
        <div className="cryptoInfoContainer">
          <CryptoInfo cryptoInfos={currentCryptoInfo} />
        </div>
      </div>
      <div className="cryptoDescription">
        {isLoading ? (
          <LoadingComponent />
        ) : isError ? (
          <Redirect to="/error" />
        ) : (
          content && (
            <div>
              <WikiEntry {...content} />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Crypto;
