import React, { Component } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

class NotFound extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Ups!</h1>
                        <h2>
                            Błąd 404</h2>
                        <div className="error-details">
                        Przepraszamy, wystąpił błąd, nie znaleziono żądanej strony!
                        </div>
                        <div className="error-actions">
                            <Link to="/" className="btn btn-primary btn-lg">
                            <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faHome} />
                                Powrót do strony głównej </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default NotFound;