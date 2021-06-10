import React, { useState } from "react";
import blockchain_logo from "./../assets/icon_blockchain.png"
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = ({values}) => {

console.log("here");
console.log(values);
console.log(values[0].price);

// console.log(prevData)  

  const [searchInput, setSearchInput] = useState("");
  const onSearchInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

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
  const cryptos = props.content && props.content.items.filter(item => item.sys.contentType.sys.id === 'crypto');

  return (

    <header>

      <div className="prenav">
        <Link className="logoImage" to='/'>
            <img src={blockchain_logo} alt="blockchain logo" id="blchainlogo"/>
        </Link>
        
        <Link className="logoText" to='/'>
            <div className="container">
                <div className="row">
                    <h1>The Daily Crypto</h1>
                </div>
                <div className="row fs-6">
                    <h3 className="fs-6 text-end">Powered by React & Contentful</h3>
                </div>
            </div>
        </Link>
        
        <div className="nav_ticker">

            <div className="table-responsive-l">
                <table className="table table-borderless fw-lighter table-xxl">
                    <tbody>
                        <tr className="fs-5 row-bottom-margin" id="currency_labels">
                            <th>BTC</th>
                            <th>ETH</th>
                            <th>XRP</th>
                            <th>BCH</th>
                            <th>EOS</th>
                            <th>DOGE</th>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="fs-5">
                            <th>${tickerValues(values,"BTC")[0]}</th>
                            <th>${tickerValues(values,"ETH")[0]}</th>
                            <th>${tickerValues(values,"XRP")[0]}</th>
                            <th>${tickerValues(values,"BCH")[0]}</th>
                            <th>${tickerValues(values,"EOS")[0]}</th>
                            <th>${tickerValues(values,"DOGE")[0]}</th>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="fs-6">
                            <th style={{color: tickerValues(values,"BTC")[2]}}>{tickerValues(values,"BTC")[1]}%</th>
                            <th style={{color: tickerValues(values,"ETH")[2]}}>{tickerValues(values,"ETH")[1]}%</th>
                            <th style={{color: tickerValues(values,"XRP")[2]}}>{tickerValues(values,"XRP")[1]}%</th>
                            <th style={{color: tickerValues(values,"BCH")[2]}}>{tickerValues(values,"BCH")[1]}%</th>
                            <th style={{color: tickerValues(values,"EOS")[2]}}>{tickerValues(values,"EOS")[1]}%</th>
                            <th style={{color: tickerValues(values,"DOGE")[2]}}>{tickerValues(values,"DOGE")[1]}%</th>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
        
        <div className="nav_links"></div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand">ToDO: Name</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cryptos
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {cryptos && cryptos.map(item => {
                    return (
                      <li>
                        <Link to={'/crypto/' + item.fields.id}>
                          <span>{item.fields.title}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Second
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div className="dropdown-item" name="second">
                      Second-First
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item" name="second">
                      Second-Second
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Third
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div className="dropdown-item" name="third">
                      Third-First
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item" name="third">
                      Third-Second
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className="d-flex"
              onSubmit={(event) => {
                event && event.preventDefault();
                //TODO: Do the search
              }}
            >
              <input
                onChange={(event) => onSearchInputChange(event)}
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Header;