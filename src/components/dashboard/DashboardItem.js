import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { faMoneyBill, faPenToSquare, faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_URL = 'http://localhost:8080/wallet';

const DashboardItem = () => {

    const [wallets, setWallets] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(API_URL);
        setWallets(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container">
            {wallets.map((wallets) => (
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{wallets.name}</h3>
                            <p>{wallets.accountNumber}</p>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 text-center">
                            <h3>Stan</h3>
                            <h1>{wallets.currentBalance}</h1>
                        </div>
                        <div className="col-md-4 col-12 d-lg-block">
                            <ul className="list-group">
                                <Link className="underline" to="transactions.html">
                                    <li className="list-group-item board text-success">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faMoneyBill} />
                                        Zobacz transakcje
                                    </li>
                                </Link>
                                <Link className="underline" to="walletForm.html">
                                    <li className="list-group-item update text-info">
                                        <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faPenToSquare} />
                                        Zaktualizuj informacje o koncie
                                    </li>
                                </Link>
                                <Link className="underline" to="/">
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
            )
            )}

        </div>
    );
}


export default DashboardItem;