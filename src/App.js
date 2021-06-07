import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Error from './Components/Error';
import LoadingComponent from './Components/LoadingComponent'

import Client from './client';

function App() {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    
    Client.getEntries()
    .then(result => {
      console.log(result);
      setIsLoading(false);
      setContent(result);
    }, (error) => {
      throw Error("Network Error." + error)
    })
    .catch(error => {
      console.log("Error occured");
      console.error(error);
      setIsLoading(false);
      setIsError(true);
    })
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/error" component={Error} />
        <Route path="/">
        { isLoading? 
            <LoadingComponent /> :
            isError?
            <Redirect to="/error" /> :
            content && <Main content={content} />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
