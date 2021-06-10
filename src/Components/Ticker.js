import React from 'react';
import LoadingComponent from './LoadingComponent';
import './Ticker.css'

const Ticker = ({values}) => {

  function tickerValues (values,id){

    let coin_index;
    
    if (id==="BTC"){coin_index = 0} else
    if (id==="ETH"){coin_index = 1} else
    if (id==="DOGE"){coin_index = 2} else
    if (id==="XRP"){coin_index = 3} else
    if (id==="BCH"){coin_index = 4} else
    if (id==="EOS"){coin_index = 5} else

    console.log(coin_index);

    let currentValueCrypto = parseFloat(values[coin_index].price)

    if (currentValueCrypto < 1000.0) {
        currentValueCrypto = parseFloat(values[coin_index].price).toFixed(2)}
    else{
        currentValueCrypto = parseFloat(values[coin_index].price).toFixed(0)
    }

    currentValueCrypto = currentValueCrypto.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     
    let oneDayPctChange = (parseFloat(values[coin_index]["1d"].price_change_pct)*100.0).toFixed(2) ;

    let color_string;

    oneDayPctChange >= 0 ? color_string = "green" : color_string = "red";

    return ([
        currentValueCrypto,
        oneDayPctChange,
        color_string
    ]);
  }

  if(!values) {
    return <h1>Loading current data...</h1>
  }

  return (
    <table className="table table-borderless fw-lighter table-xxl">
      <tbody>
          <tr className="fs-5 row-bottom-margin" id="currency_labels">
            {values && values.map(item => <th>{item.id}</th>)}
          </tr>
          <tr className="fs-5">
            {values && values.map(item => <td>${tickerValues(values, item.id)[0]}</td>)}
          </tr>
          <tr className="fs-6">
            {values && values.map(item => <td style={{color: tickerValues(values, item.id)[2]}}>{tickerValues(values, item.id)[1]}%</td>)}
          </tr>
      </tbody>
  </table>
  )
}

export default Ticker;