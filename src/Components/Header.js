import React, { useState } from "react";
import blockchain_logo from "./../assets/icon_blockchain.png"
import "./Header.css"

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const onSearchInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  return (
    <header>

      <div className="prenav">
        <div className="logoImage"></div>

            <img src={blockchain_logo} alt="blockchain logo" id="blchainlogo"/>
        
        <div className="logoText">
            <div className="container">
                <div className="row">
                    <h1>The Daily Crypto</h1>
                </div>
                <div className="row fs-6">
                    <h3 className="fs-6 text-end">Powered by React & Contentful</h3>
                </div>
            </div>
        </div>
        
        <div className="nav_ticker">

            <div class="table-responsive-l">
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
                            <th>$1.00</th>
                            <th>$2.00</th>
                            <th>$3.00</th>
                            <th>$4.00</th>
                            <th>$5.00</th>
                            <th>$6.00</th>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr className="fs-6">
                            <th>+0.1%</th>
                            <th>-0.2%</th>
                            <th>+0.3%</th>
                            <th>-0.4%</th>
                            <th>+0.5%</th>
                            <th>-0.6%</th>
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
                  First
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div className="dropdown-item" name="first">
                      First-First
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item" name="first">
                      First-Second
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