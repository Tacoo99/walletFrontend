import React, { Component } from "react";
import {
  faHome,
  faRightToBracket,
  faWallet,
  faList,
  faUser,
  faArrowRightFromBracket,
  faShop
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { ReactSession } from 'react-client-session';


class Nav extends Component {
  render() {
    let loggedUSer = ReactSession.get("loggedUser");

    const logout = () => {
      ReactSession.set('loggedUser', null);
      window.location.href = "http://localhost:3000/";
    }

    if (loggedUSer == null) {
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <span className="navbar-brand">
              <FontAwesomeIcon
                style={{
                  marginRight: 5,
                }}
                icon={faWallet}
              />
              Twój portfel
            </span>
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
                  <Link className="nav-link" to="/">
                    <FontAwesomeIcon
                      style={{
                        marginRight: 5,
                      }}
                      icon={faHome}
                    />
                    Główna
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
    else {
      return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
          <div className="container">
            <span className="navbar-brand">
              <FontAwesomeIcon
                style={{
                  marginRight: 5,
                }}
                icon={faWallet}
              />
              Twój portfel
            </span>
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
                    Dodaj
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
                    Portfele
                  </Link>
                </li>

                <li
                  style={{
                    marginLeft: 3,
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/payments">
                    <FontAwesomeIcon
                      style={{
                        marginRight: 5,
                      }}
                      icon={faShop}
                    />
                    Sklep
                  </Link>
                </li>

                <li
                  style={{
                    marginLeft: 3,
                  }}
                  className="nav-item"
                >
                  <Link className="nav-link" to="/account">
                    <FontAwesomeIcon
                      style={{
                        marginRight: 5,
                      }}
                      icon={faUser}
                    />
                    Konto
                  </Link>
                </li>

              </ul>
            </div>
            <div class="d-flex align-items-center">
              <Link to="/account"><button type="button" class="btn btn-primary px-3 me-2">
                <FontAwesomeIcon
                  style={{
                    marginRight: 8,
                  }}
                  icon={faUser}
                />
                Witaj <b>{loggedUSer}</b>
              </button>
              </Link>

              <button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-primary px-3 me-2">
                <FontAwesomeIcon
                  style={{
                    marginRight: 8,
                  }}
                  icon={faArrowRightFromBracket}
                />
                Wyloguj się
              </button>
            </div>

            <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">

                <div className="modal-content">
                  <div className="modal-header">

                    <h5 style={{
                      marginRight: '5%'
                    }} className="modal-title">Potwierdzenie</h5>
                  </div>
                  <div className="modal-body">
                    <p>Na pewno chcesz wylogować się?</p>
                  </div>
                  <div className="modal-footer justify-content-between">
                  <button type="button" onClick={() => logout()} className="btn btn-default">Tak</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Nie</button>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </nav>
      );
    }
  }
}

export default Nav;
