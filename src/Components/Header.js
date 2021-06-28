import React, { useState, useEffect } from "react";
import blockchain_logo from "./../assets/icon_blockchain.png";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import Ticker from "./Ticker";

const Header = ({ values }) => {
  const [wiki, setWiki] = useState(null);
  const [author, setAuthor] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const onSearchInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3030/wiki")
      .then(
        (result) => {
          if (result) {
            return result.json();
          }
          throw Error("Failed to get the data");
        },
        (error) => {
          throw Error("Network Error." + error);
        }
      )
      .then((jsonResult) => {
        setWiki(jsonResult);
      })
      .catch((error) => {
        console.log("Error occured");
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3030/author")
      .then(
        (result) => {
          if (result) {
            return result.json();
          }
          throw Error("Failed to get the data");
        },
        (error) => {
          throw Error("Network Error." + error);
        }
      )
      .then((jsonResult) => {
        setAuthor(jsonResult);
      })
      .catch((error) => {
        console.log("Error occured");
        console.error(error);
      });
  }, []);

  const performSearch = (event) => {
    console.log(searchInput);
    event.preventDefault();
    history.push("/search/" + searchInput);
  };

  return (
    <header>
      <div className="prenav_background">
        <div className="prenav">
          <div className="logo">
            <Link className="logoImage" to="/">
              <img
                src={blockchain_logo}
                alt="blockchain logo"
                id="blchainlogo"
              />
            </Link>

            <Link className="logoText" to="/">
              <div className="container">
                <div className="row">
                  <h1>The Daily Crypto</h1>
                </div>
                <div className="row fs-6">
                  <h3 className="fs-6 text-end">
                    Powered by React & Contentful
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div className="nav_ticker">
            <div className="table-responsive-l">
              <Ticker values={values} />
            </div>
          </div>

          {/* <div className="nav_links"></div> */}
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="navbar-content">
          <div className="menus">
            <div
              className="navbar-collapse navbar-expand-sm"
              id="navbarSupportedContent"
            >
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

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {wiki &&
                      wiki.map((item) => {
                        return (
                          <li key={item.coin}>
                            <Link to={"/crypto/" + item.coin}>
                              <p>{item.title}</p>
                            </Link>
                          </li>
                        );
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
                    Authors
                  </div>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {author &&
                      author.map((item) => {
                        return (
                          <li key={item.name}>
                            <Link to={"/authors/" + item.name}>
                              <p>{item.name}</p>
                            </Link>
                          </li>
                        );
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
                    Admin
                  </div>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <div className="dropdown-item" name="third">
                        <Link to={"/authorAdmin/"}>
                          <p>Author Admin</p>
                        </Link>
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
            </div>
          </div>

          <div className="search-bar">
            {/* Search bar */}
            <form className="d-flex" onSubmit={performSearch}>
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
