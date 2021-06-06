import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

import Client from './client';

function App() {
  const [content, setContent] = useState(null);
  
  useEffect(() => {
    
    Client.getEntries()
    .then(result => {
      console.log(result);
      setContent(result);
    }, (error) => {
      throw Error("Network Error." + error)
    })
    .catch(error => {
      console.log("Error occured");
      console.error(error);
    })
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route path="/">
          { content && <Main content={content} />}
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
