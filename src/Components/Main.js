import React from "react";
import News from "./News";
import Author from "./Author";
import Crypto from "./Crypto";
import AuthorAdmin from "./AuthorAdmin";
import { Switch, Route } from "react-router-dom";
import "./Main.css";
import SearchResult from "./SearchResult";

const Main = ({ currentData }) => {
  return (
    <main className="mainWidth center">
      <Switch>
        <Route path="/authors/:name">
          <Author />
        </Route>
        <Route path="/crypto/:id">
          <Crypto currentData={currentData} />
        </Route>
        <Route path="/authorAdmin/">
          <AuthorAdmin currentData={currentData} />
        </Route>
        <Route path="/search/:keyword">
          <SearchResult />
        </Route>
        <Route path="/">
          <News />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
