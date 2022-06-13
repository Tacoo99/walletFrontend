import React, { Component } from 'react'
import {
  faPlus,
  faWallet,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import { ReactSession }  from 'react-client-session';

const logout = () => {
  ReactSession.set('loggedUser',null);
  alert('Wylogowano pomyślnie');
  window.location.href = "http://localhost:3000/";
}

class MyAccount extends Component {
  render() {

    let loggedUSer = ReactSession.get("loggedUser");

      if(loggedUSer == null){
        window.location.href = "http://localhost:3000/403";
    }

    else{
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
                
                  <div onClick={logout} className="col-lg-2 col-md-auto m-3 shadow p-3 mb-5 bg-white rounded hoverStyle">
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
      </div>
    );
  }
}
}

export default MyAccount;
