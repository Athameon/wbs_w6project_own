import React, { useState, useEffect, useRef } from 'react';
import LoadingComponent from './LoadingComponent';
import { DateTime } from 'luxon';

const CryptoInfo = ({cryptoInfos}) => {
  const priceDelta = useRef(0)
  const prevData = useRef(null);

  console.log('cryptoInfos', cryptoInfos);

  useEffect(() => {
    prevData.current = cryptoInfos;
  }, [cryptoInfos])

  const currentPriceChange = prevData.current && cryptoInfos.price - prevData.current.price;
  if (currentPriceChange !== 0) {
    priceDelta.current = currentPriceChange;
  }
  
  if(cryptoInfos) {
    return (
      <aside>
        <h2>Name:</h2>
        <p>{cryptoInfos.name}</p>
        <h2>Currency</h2>
        <p>{cryptoInfos.currency}</p>
        <h2>Price (€):</h2>
        <p>{cryptoInfos.price} {prevData.current === null? "-" : currentPriceChange === 0? "O" :  currentPriceChange > 0? "+" : "-"}</p>
        <p>{prevData.current && priceDelta.current > 0 && "+"}{priceDelta.current}</p>
        <h2>First Trade:</h2>
        <p>{DateTime.fromISO(cryptoInfos.first_trade).setLocale('de').toLocaleString()}</p>
        <h2>Alltime high date:</h2>
        <p>{DateTime.fromISO(cryptoInfos.high_timestamp).setLocale('de').toLocaleString()}</p>
        <h2>Alltime high value:</h2>
        <p>{cryptoInfos.high}</p>
        <hr />
        <h2>Exchange history:</h2>
        <h3>1 Day</h3>
        <p>{cryptoInfos["1d"].price_change}</p>
        <h3>7 Days</h3>
        <p>{cryptoInfos["7d"].price_change}</p>
        <h3>30 Days</h3>
        <p>{cryptoInfos["30d"].price_change}</p>
        <h3>356 Days</h3>
        <p>{cryptoInfos["365d"].price_change}</p>
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