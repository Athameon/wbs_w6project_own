import React, { useState } from "react";

const Header = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const onSearchInputChange = ({ target }) => {
    setSearchInput(target.value);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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