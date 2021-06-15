import React from 'react';
import LoadingComponent from './LoadingComponent';
import { Link } from 'react-router-dom';
import './Ticker.css'

const Ticker = ({values}) => {

  function tickerValues (values,id){
    const cryptoValue = values.filter(item => item.id === id)[0];
    let currentValueCrypto = parseFloat(cryptoValue.price)

    if (currentValueCrypto < 1000.0) {
        currentValueCrypto = parseFloat(cryptoValue.price).toFixed(2)}
    else{
        currentValueCrypto = parseFloat(cryptoValue.price).toFixed(0)
    }

    currentValueCrypto = currentValueCrypto.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
     
    let oneDayPctChange = (parseFloat(cryptoValue["1d"].price_change_pct)*100.0).toFixed(2) ;

    let color_string;

    oneDayPctChange >= 0 ? color_string = "green" : color_string = "red";

    return ({
        value: currentValueCrypto,
        dayDelta: oneDayPctChange,
        color: color_string
    });
  }

  if(!values) {
    return <h1>Loading current data...</h1>
  }

  return (
    <table className="table table-borderless fw-lighter table-xxl">
      <tbody>
          <tr className="fs-5 row-bottom-margin">
            {values && values.map(item => <th key={'title_' + item.id}><Link to={'/crypto/' + item.id.toLowerCase()} id="currency_labels" >{item.id}</Link></th>)}
          </tr>
          <tr className="fs-5">
            {values && values.map(item => <td key={'value_' + item.id}>€{tickerValues(values, item.id).value}</td>)}
          </tr>
          <tr className="fs-6">
            {values && values.map(item => <td key={'change_' + item.id} style={{color: tickerValues(values, item.id).color}}>{tickerValues(values, item.id).dayDelta}%</td>)}
          </tr>
      </tbody>
  </table>
  )
}

export default Ticker;