import React, { Component } from 'react'
import { Link} from 'react-router-dom'


class Transaction extends Component {
    render() {
            const { id } = this.props.match.params;
        return (
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
                    Powrót
                </Link>
                <Link to={`/trns/add/${id}`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle"> Dodaj transakcję</i>
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header bg-success text-white">
                        <h4>UBL Account Balance</h4>
                        <h1>Rs. 27000</h1>
                    </div>
                </div>
                <hr />
              
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Data</th>
                            <th scope="col">Opis</th>
                            <th scope="col">Ilość</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-danger">
                            <td>2020-04-15</td>
                            <td>PTCL Bill</td>
                            <td className="text-danger">-3000</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                        <tr className="table-success">
                            <td>2020-04-01</td>
                            <td>Income</td>
                            <td className="text-success">+30000</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Transaction
