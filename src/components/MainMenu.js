import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { ReactSession }  from 'react-client-session';

class MainMenu extends Component {

  render() {

    let loggedUSer = ReactSession.get("loggedUser");
    if(loggedUSer != null){
      window.location.href = "http://localhost:3000/account";
    }
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
              <h1 className="display-3 mb-4">Twój cyfrowy portfel</h1>
              <p className="lead">
                Z łatwością zarządzaj swoimi funduszami!
              </p>
              <hr />
              <div
                style={{
                  marginTop: "3%",
                  flex: 1,
                  alignItems: "row",
                }}
                className="row justify-content-center"
              >
              </div>
            </div>
          </div>
          <div className="row">
          <LinkContainer to="/login">
            <div className="col-md-12 d-flex justify-content-center">
            <a className="fb connect">Zaloguj się przez Facebook</a>
            </div>
            </LinkContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
