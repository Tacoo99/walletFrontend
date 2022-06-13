import React, { Component } from "react";
import {
  faHome,
  faRightToBracket,
  faWallet,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <FontAwesomeIcon
              style={{
                marginRight: 5,
              }}
              icon={faWallet}
            />
            Twój portfel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/account">
                  <FontAwesomeIcon
                    style={{
                      marginRight: 5,
                    }}
                    icon={faHome}
                  />
                  Główna
                </Link>
              </li>

              <li
                style={{
                  marginLeft: 3,
                }}
                className="nav-item"
              >
                <Link className="nav-link" to="/createWallet">
                  <FontAwesomeIcon
                    style={{
                      marginRight: 5,
                    }}
                    icon={faWallet}
                  />
                  Dodaj portfel
                </Link>
              </li>

              <li
                style={{
                  marginLeft: 3,
                }}
                className="nav-item"
              >
                <Link className="nav-link" to="/dashboard">
                  <FontAwesomeIcon
                    style={{
                      marginRight: 5,
                    }}
                    icon={faList}
                  />
                  Wszystie portfele
                </Link>
              </li>

            </ul>
          </div>
          <div class="d-flex align-items-center">
            <Link to="/login">
            <button type="button" class="btn btn-primary px-3 me-2">
              <FontAwesomeIcon
                style={{
                  marginRight: 8,
                }}
                icon={faRightToBracket}
              />
              Zaloguj się
            </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
