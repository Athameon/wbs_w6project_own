import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Error from './Components/Error';

function App() {
    //State for the current prices from 
    const [currentData, setCurrentData] = useState(null);
    const [coins, setCoins] = useState("BTC,ETH,XRP,BCH,EOS,DOGE,ADA,DOT")
  
    // hook for fetching with time interval
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Trigger fetch data from api.");
            fetchDateFromNomicApi();
        }, 5000)
        return () => {
            clearInterval(interval);
        }
    }, [coins])

    // hook for the fetch of the first render
    useEffect(() => {
        fetchDateFromNomicApi();
    }, [])
 
    return (
        <div>
            <Header values={currentData} />
            <Switch>
                <Route path="/error" component={Error} />
                <Route path="/">
                <Main currentData={currentData} />
                </Route>
            </Switch>
            <Footer />
        </div>
    );

    function fetchDateFromNomicApi() {
        const nomicApiUrl = process.env.REACT_APP_NOMICS_API_URL + "?key=" + process.env.REACT_APP_NOMICS_API_KEY +  "&ids=" + coins + "&convert=EUR&per-page=100&page=1";

        fetch(nomicApiUrl, {
            method: 'GET',
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        })
        .then(result => {
            console.log(result);
            if (result.ok) {
                return result.json();
            }
            throw Error("Error");
        }, (error => {
            throw Error("Network Error");
        }))
        .then(jsonData => {
            setCurrentData(jsonData);
        })
        .catch(error => {
            console.error(error);
        });
    }
}

export default App;
