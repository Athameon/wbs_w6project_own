import React, { useState, useEffect, useRef } from 'react';
import Data from '../Mock.json';
import LoadingComponent from './LoadingComponent';

const CryptoInfo = () => {
  const [values, setCurrentData] = useState(null);
  const priceDelta = useRef(0)
  const prevData = useRef(null);
  // setCurrentData(Data);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Trigger fetch data from api.");
      fetch("https://api.nomics.com/v1/currencies/ticker?key=e976e656db4b58f3a781f96a9918f6f3916e6849&ids=BTC,ETH,XRP&convert=EUR&per-page=100&page=1", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      })
      .then(result => {
        console.log(result);
        if(result.ok) {
          return result.json();
        }
        throw Error("Error");
      }, (error => {
        throw Error("Network Error");
      }))
      .then(jsonData => {
        if (priceDelta.current !== jsonData[0].price) {
          console.log("Update price");
          setCurrentData(jsonData[0]);
          priceDelta.current = jsonData[0].price;
        }
        
      })
      .catch(error => {
        console.error("Failed to fetch the data.");
      })
    }, 5000)
    return () => {
      clearInterval(interval);
    }
  }, [])

  useEffect(() => {
    fetch("https://api.nomics.com/v1/currencies/ticker?key=e976e656db4b58f3a781f96a9918f6f3916e6849&ids=BTC,ETH,XRP&convert=EUR&per-page=100&page=1", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    })
    .then(result => {
      console.log(result);
      if(result.ok) {
        return result.json();
      }
      throw Error("Error");
    }, (error => {
      throw Error("Network Error");
    }))
    .then(jsonData => {
      setCurrentData(jsonData[0]);
    })
    .catch(error => {
      console.error(error);
    })
  }, [])

  useEffect(() => {
    prevData.current = values;
  }, [values])
  
  if(values) {
    return (
      <aside>
        <h2>Name:</h2>
        <p>{values.name}</p>
        <h2>Currency</h2>
        <p>{values.currency}</p>
        <h2>Price (€):</h2>
        <p>{values.price} {prevData.current === null? "-" : values.price === prevData.current.price? "O" :  values.price > prevData.current.price? "+" : "-"}</p>
        <p>{prevData.current && values.price - prevData.current.price > 0 && "+"}{prevData.current && values.price - prevData.current.price}</p>
        <h2>First Trade:</h2>
        <p>{values.first_trade}</p>
        <h2>Alltime high date:</h2>
        <p>{values.high_timestamp}</p>
        <h2>Alltime high value:</h2>
        <p>{values.high}</p>
        <hr />
        <h2>Exchange history:</h2>
        <h3>1 Day</h3>
        <p>{values["1d"].price_change}</p>
        <h3>7 Days</h3>
        <p>{values["7d"].price_change}</p>
        <h3>30 Days</h3>
        <p>{values["30d"].price_change}</p>
        <h3>356 Days</h3>
        <p>{values["365d"].price_change}</p>
      </aside>
    )
  } else {
    return ( 
      <>
        <h2>Crypto Info</h2>
        <LoadingComponent />
      </>
    )
  }

}

export default CryptoInfo;