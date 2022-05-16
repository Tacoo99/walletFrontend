import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {deleteWallet} from '../../actions/projectActions'
import {connect} from 'react-redux'
import { faMoneyBill, faPenToSquare, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class DashboardItem extends Component {
    deleteBtnClick = () =>{
        if(window.confirm("Na pewno chcesz usunąć ten portfel?")){
            this.props.deleteWallet(this.props.wallet.id)
        }
    }
    render() {
        const wallet = this.props.wallet
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{wallet.name}</h3>
                            <p>Numer konta: {wallet.accountNumber}</p>
                            <p>{wallet.description}</p>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 text-center">
                            <h3>Stan</h3>
                            <h1>{wallet.currentBalance} zł</h1>
                        </div>
                        <div className="col-md-4 col-12 d-lg-block">
                            <ul className="list-group">
                                <Link to={`/transactions/${wallet.id}`}>
                                <li className="list-group-item board text-success">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faMoneyBill} />
                                        Zobacz transakcje
                                    </li>
                                </Link>
                                <Link to={`/updatewallet/${wallet.id}`}>
                                <li className="list-group-item update text-info">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faPenToSquare} />
                                        Zaktualizuj informacje o koncie
                                    </li>
                                </Link>
                                <Link to="/dashboard" onClick={()=>this.deleteBtnClick()}>
                                <li className="list-group-item delete text-danger">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faCircleMinus} />
                                        Usuń konto
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{deleteWallet})(DashboardItem)
