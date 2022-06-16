import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {getWallet, getTransactions} from '../../actions/projectActions'
import { ReactSession }  from 'react-client-session';
import TransactionTable from './TransactionTable'

class Transaction extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentBalance:''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        if(nextProps.wallet){
            this.setState({
                currentBalance:nextProps.wallet.currentBalance,
            })
        }
    }

    componentDidMount(){
        this.props.getWallet(this.props.match.params.id)
    }

    render() {
        let id = this.props.match.params.id;
        ReactSession.set("walletID",{id});
        let loggedUSer = ReactSession.get("loggedUser");
        if(loggedUSer == null){
            window.location.href = "http://localhost:3000/403";
        }
        else{
          
        return (
            
            <div className="container">
                <Link to="/dashboard" className="btn btn-default btn-lg mb-3">
                    Wróć
                </Link>
                <Link to={`/trns/add/${id}`} className="btn btn-info btn-lg mb-3">
                    <i className="fas fa-plus-circle"> Dodaj nową transakcję</i>
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header bg-success text-white">
                        <h4>Stan konta</h4>
                        <h1>{this.state.currentBalance} zł</h1>
                    </div>
                </div>
                <hr />
              
                <TransactionTable></TransactionTable>

            </div>
        )
    }
}
}

const mapStateToProps = (state) => ({
    wallet:state.wallet.wallet
})

export default connect(mapStateToProps,{getWallet, getTransactions})(Transaction)
