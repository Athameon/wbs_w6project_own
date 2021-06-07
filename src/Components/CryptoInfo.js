import React from 'react';
import Data from '../Mock.json';

let previousValues = null;

const CryptoInfo = () => {
  const values = Data[0];

  if (previousValues) {
    previousValues = {
      previousValue: {
        rise: values.price > previousValues.previousValue.price? 
          true : values.price < previousValues.previousValue.price? 
            false : null ,
        price: values.price
      },
      previous1Day: {
        rise: values["1d"].price_change > previousValues.previous1Day.price? 
          true : values["1d"].price_change < previousValues.previous1Day.price? 
            false : null,
        price: values["1d"].price_change, 
      },
      previous7Days: {
        rise: values["7d"].price_change > previousValues.previous7Days.price? 
          true : values["7d"].price_change < previousValues.previous7Days.price? 
            false : null,
        price: values["7d"].price_change, 
      },
      previous30Days: {
        rise: values["30d"].price_change > previousValues.previous30Days.price? 
          true : values["30d"].price_change < previousValues.previous30Days.price? 
            false : null,
        price: values["30d"].price_change, 
      },
      previous365Days: {
        rise: values["365d"].price_change > previousValues.previous365Days.price? 
          true : values["365d"].price_change < previousValues.previous365Days.price? 
            false : null,
        price: values["365d"].price_change,
      }
    };
  } else {
    previousValues = {
      previousValue: {
        price: values.price, 
        rise: null
      },
      previous1Day: {
        price: values["1d"].price_change, 
        rise: null
      },
      previous7Days: {
        price: values["7d"].price_change, 
        rise: null
      },
      previous30Days: {
        price: values["30d"].price_change, 
        rise: null
      },
      previous365Days: {
        price: values["365d"].price_change, 
        rise: null
      }
    };
  }
  
  return (
    <aside>
      <h2>Name:</h2>
      <p>{values.name}</p>
      <h2>Currency</h2>
      <p>{values.currency}</p>
      <h2>Price (€):</h2>
      <p>{values.price} {previousValues.previousValue.rise === null? "NO" : previousValues.previousValue.rise? "+" : "-"}</p>
      <h2>First Trade:</h2>
      <p>{values.first_trade}</p>
      <h2>Alltime high date:</h2>
      <p>{values.high_timestamp}</p>
      <h2>Alltime high value:</h2>
      <p>{values.high}</p>
      <hr />
      <h2>Exchange history:</h2>
      <h3>1 Day</h3>
      <p>{values["1d"].price_change} {previousValues.previous1Day.rise === null? "NO" : previousValues.previous1Day.rise? "+" : "-"}</p>
      <h3>7 Days</h3>
      <p>{values["7d"].price_change} {previousValues.previous7Days.rise === null? "NO" : previousValues.previous7Days.rise? "+" : "-"}</p>
      <h3>30 Days</h3>
      <p>{values["30d"].price_change} {previousValues.previous30Days.rise === null? "NO" : previousValues.previous30Days.rise? "+" : "-"}</p>
      <h3>356 Days</h3>
      <p>{values["365d"].price_change} {previousValues.previous365Days.rise === null? "NO" : previousValues.previous365Days.rise? "+" : "-"}</p>
    </aside>
  )
}

export default CryptoInfo;