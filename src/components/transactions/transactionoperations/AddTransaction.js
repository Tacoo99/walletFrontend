import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {createTransaction} from '../../../actions/projectActions';
import { connect } from 'react-redux';
import {getWallet,updateWallet} from '../../../actions/projectActions'


class AddTransaction extends Component {
    constructor(props) {
        super(props)

        this.state = {

            //Transaction
            amount: '',
            description: '',
            type: '1',


            //Wallet
            id:'',
            name: '',
            accountNumber: '',
            descriptionWallet: '',
            priority: '',
            currentBalance:'',
            errors:'',

            newBalance: ''
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        if(nextProps.wallet){
            this.setState({
                id:nextProps.wallet.id,
                name: nextProps.wallet.name,
                accountNumber: nextProps.wallet.accountNumber,
                descriptionWallet: nextProps.wallet.description,
                priority: nextProps.wallet.priority,
                currentBalance:nextProps.wallet.currentBalance,
            })
        }
    }

    componentDidMount(){
        this.props.getWallet(this.props.match.params.id)
    }

    changeHandler = (event, fieldName, checkbox) => {
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value,
        })

    }
    handleSubmit = (event) => {

        let balance;

        let newTransaction = { 
            amount: this.state.amount, 
            description: this.state.description, 
            type: this.state.type,
        }

        if(this.state.type === '1'){
           balance = parseInt(this.state.currentBalance) + parseInt(this.state.amount);
        }
        if(this.state.type === '2'){
            balance = parseInt(this.state.currentBalance) - parseInt(this.state.amount);
            if(balance < 0){
                alert('Stan konta nie może być mniejszy niż 0!')
                return
            }
        }
        
        const updateWallet = {
            id:this.state.id,
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.descriptionWallet,
            currentBalance: balance,
            priority: this.state.priority
        }
        this.props.updateWallet(this.state.id,updateWallet,this.props.history)
        this.props.createTransaction(newTransaction,this.props.history,this.props.match.params.id);
        event.preventDefault();
    }

   
    render() {
        let id = this.props.match.params.id;
        const { amount, description, type } = this.state;

        
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/transactions/${id}`} className="btn btn-light">
                                Wróć
                    </Link>
                            <h4 style={{
                                marginBottom: '4%'
                            }}
                            className="display-4 text-center">Dodaj nową transakcję</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div style={{
                                    marginBottom: '1%'
                                }}
                                className="form-group">
                                    <input type="number" min="1" value={amount} onChange={event => this.changeHandler(event, "amount", false)} className="form-control form-control-lg" placeholder="Kwota" required />
                                </div>
                                <div className="form-group">
                                    <textarea value={description} onChange={event => this.changeHandler(event, "description", false)} className="form-control form-control-lg" placeholder="Opis" required ></textarea>
                                </div>
                                <div className="form-group">
                                    <label style={{
                                        marginTop: '1%',
                                        marginRight: '1%'
                                    }}
                                    htmlFor="exampleFormControlTextarea1">Typ transakcji:</label>
                                    <div className="form-check form-check-inline">
                                        <input checked={type === '1'} className="form-check-input" type="radio" id="income" onChange={event => this.changeHandler(event, "type", false)} value="1" />
                                        <label className="form-check-label" htmlFor="income">Dodaj</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input checked={type === '2'} className="form-check-input" type="radio" id="expense" onChange={event => this.changeHandler(event, "type", false)} value="2" />
                                        <label className="form-check-label" htmlFor="expense">Odejmij</label>
                                    </div>

                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    errors:state.errors,
    wallet:state.wallet.wallet
})

export default connect(mapStateToProps,{createTransaction, getWallet, updateWallet})(AddTransaction)