import React, { Component } from "react";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

class MainMenu extends Component {
  render() {
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
                Z łatwością zarządzaj swoimi funduszami oraz transakcjami!
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
                <LinkContainer to="/account">
                  <div className="col-lg-2 col-md-auto">
                    <div className="shadow-sm p-3 mb-5 bg-white rounded hoverStyle">
                      <FontAwesomeIcon
                        size="6x"
                        style={{
                          margin: "10%",
                        }}
                        icon={faRightToBracket}
                      />
                      <p className="lead">Logowanie</p>
                    </div>
                  </div>
                </LinkContainer>

                <div className="col-lg-2 col-md-auto ">
                  <LinkContainer to="/account">
                    <div className="shadow-sm p-3 mb-5 bg-white rounded hoverStyle">
                      <FontAwesomeIcon
                        size="6x"
                        style={{
                          margin: "10%",
                        }}
                        icon={faUserPlus}
                      />
                      <p className="lead">Rejestracja</p>
                    </div>
                  </LinkContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div class="col-lg-2 col-md-2">
                <Link to="/createwallet">
                  <div className="google-btn hoverStyle">
                    <div className="google-icon-wrapper">
                      <img
                        className="google-icon"
                        alt="Logo Google"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                      />
                    </div>
                    <p className="btn-text">
                      <b>Zaloguj się przez Google</b>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
