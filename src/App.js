import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route path="/">
          <Main />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
