import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { deleteWallet } from '../../actions/projectActions'
import { connect } from 'react-redux'
import { faPenToSquare, faTrash, faWallet, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class DashboardItem extends Component {
    render() {
        const wallet = this.props.wallet

        const deleteBtnClick = () => {
            if (wallet.currentBalance > 0) {
                alert('Portfel nie jest pusty, przenieś najpierw swoje środki!');
            }
            else {
                this.props.deleteWallet(this.props.wallet.id)
            }
        }

        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-2 col-md-3 col-6">
                            <FontAwesomeIcon style={{
                                marginRight: 5,

                            }}

                                icon={faWallet} size="6x" color='gray' />
                        </div>
                        <div className="col-lg-3 col-md-3 col-6">
                            <h3>{wallet.name}</h3>
                            <p>Numer konta: {wallet.accountNumber}</p>
                            <p>{wallet.description}</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-6 text-center">
                            <h3>Stan</h3>
                            <h1>{wallet.currentBalance} zł</h1>
                        </div>
                        <div className="col-md-4 col-12 d-lg-block">
                            <ul className="list-group">
                                <Link to={`/transactions/${wallet.id}`}>
                                    <li className="list-group-item text-success">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faMoneyBill} />
                                        Dodaj transakcję
                                    </li>
                                </Link>

                                <Link to={`/updatewallet/${wallet.id}`} style={{ textDecoration: 'none' }}>
                                    <li className="list-group-item update text-info">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faPenToSquare} />
                                        Zaktualizuj informacje lub stan
                                    </li>
                                </Link>

                                <Link to="#" style={{ textDecoration: 'none' }} data-toggle="modal" data-target="#deleteModal">
                                    <li className="list-group-item delete text-danger">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faTrash} />
                                        Usuń konto
                                    </li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="deleteModal" role="dialog">
                    <div className="modal-dialog">

                        <div className="modal-content">
                            <div className="modal-header">

                                <h5 style={{
                                    marginRight: '5%'
                                }} className="modal-title">Potwierdzenie</h5>
                            </div>
                            <div className="modal-body">
                                <p>Na pewno chcesz usunąć ten portfel?</p>
                            </div>
                            <div className="modal-footer justify-content-between">
                                <button type="button" onClick={() => deleteBtnClick()} data-dismiss="modal" className="btn btn-default">Tak</button>
                            
                                <button type="button" className="btn btn-default" data-dismiss="modal">Nie</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default connect(null, { deleteWallet })(DashboardItem)
