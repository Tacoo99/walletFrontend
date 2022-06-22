import React, { Component } from 'react'
import {
  faPlus,
  faWallet,
  faArrowRightFromBracket,
  faShop
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import { ReactSession } from 'react-client-session';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const logout = () => {
  ReactSession.set('loggedUser',null);
  window.location.href = "http://localhost:3000/";
}

class MyAccount extends Component {
  render() {

    let loggedUSer = ReactSession.get("loggedUser");

    if (loggedUSer == null) {
      window.location.href = "http://localhost:3000/403";
    }

    else {
      return (
        <div className="light-overlay text-dark">
          <div
            style={{
              marginTop: "2%",
            }}
            className="container"
          >
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Twoje konto</h1>
                <hr />
                <div
                  style={{
                    marginTop: "3%",
                    flex: 1,
                    alignItems: "row",
                  }}
                  className="row justify-content-center"
                >
                  <LinkContainer to="/createwallet">
                    <div className="col-lg-2 col-md-auto m-3 shadow p-3 mb-5 bg-white rounded hoverStyle">
                      <FontAwesomeIcon
                        size="6x"
                        style={{
                          margin: "10%",
                        }}
                        icon={faPlus}
                      />
                      <p className="lead">Dodaj portfel</p>
                    </div>
                  </LinkContainer>

                  <LinkContainer to="/dashboard">
                    <div className="col-lg-2 col-md-auto m-3 shadow p-3 mb-5 bg-white rounded hoverStyle">
                      <FontAwesomeIcon
                        size="6x"
                        style={{
                          margin: "10%",
                        }}
                        icon={faWallet}
                      />
                      <p className="lead">Wszystkie portfele</p>
                    </div>
                  </LinkContainer>

                  <LinkContainer to="/payments">
                    <div className="col-lg-2 col-md-auto m-3 shadow p-3 mb-5 bg-white rounded hoverStyle">
                      <FontAwesomeIcon
                        size="6x"
                        style={{
                          margin: "10%",
                        }}
                        icon={faShop}
                      />
                      <p className="lead">Sklep</p>
                    </div>
                  </LinkContainer>

                  <div data-toggle="modal" data-target="#myModal" className="col-lg-2 col-md-auto m-3 shadow p-3 mb-5 bg-white rounded hoverStyle">
                    <FontAwesomeIcon
                      size="6x"
                      style={{
                        margin: "10%",
                      }}
                      icon={faArrowRightFromBracket}
                    />
                    <p className="lead">Wyloguj się</p>
                  </div>
                </div>
              </div>
            </div>
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
      );
    }
  }
}

export default MyAccount;
