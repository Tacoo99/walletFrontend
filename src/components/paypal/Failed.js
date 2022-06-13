import React, { Component } from 'react';
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

class Failed extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Ups!</h1>
                        <h2>
                            Niestety płatność nie powiodła się</h2>
                        <div className="error-details">
                        Przepraszamy, wystąpił problem podczas zakupu, możesz spróbować ponowić próbę lub dopiero za jakiś czas
                        </div>
                        <div className="error-actions">
                            <Link to="/payments" className="btn btn-primary btn-lg">
                            <FontAwesomeIcon style={{
                                            marginRight: 10
                                        }}

                                            icon={faRepeat} />
                                Ponów płatność </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Failed;