import React, { Component } from 'react';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

class AccesDenied extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Ups!</h1>
                        <h2>
                            Błąd 403</h2>
                        <div className="error-details">
                        Przepraszamy, ale nie masz do tego dostępu
                        </div>
                        <div className="error-actions">
                            <Link to="/login" className="btn btn-primary btn-lg">
                            <FontAwesomeIcon style={{
                                            marginRight: 10
                                        }}

                                            icon={faUser} />
                                Zaloguj się </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default AccesDenied;