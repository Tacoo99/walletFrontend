import React, { Component } from 'react';
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'

class Success extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Sukces!</h1>
                        <h2>
                            Płatność powiodła się</h2>
                        <div className="error-details">
                            Od teraz możesz tworzyć dodatkowe portfele, wypróbuj już teraz!
                        </div>
                        <div className="error-actions">
                            <Link to="/createwallet" className="btn btn-primary btn-lg">
                            <FontAwesomeIcon style={{
                                            marginRight: 10
                                        }}

                                            icon={faWallet} />
                                Stwórz portfel </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Success;