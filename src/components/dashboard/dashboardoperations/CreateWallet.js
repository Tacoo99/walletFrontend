import React, { Component } from 'react'
import { createWallet } from '../../../actions/projectActions'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { ReactSession } from 'react-client-session';
import { faHome, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'


class CreateWallet extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            accountNumber: '',
            description: '',
            priority: '',
            errors: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    changeHandler = (event, fieldName) => {
        this.setState({
            [fieldName]: event.target.value
        })
    }

    submitHandler = (event) => {

        const newWallet = {
            name: this.state.name,
            accountNumber: this.state.accountNumber,
            description: this.state.description,
            priority: this.state.priority
        }
        this.props.createWallet(newWallet, this.props.history)
        event.preventDefault()
    }

    render() {

        let loggedUser = ReactSession.get("loggedUser");
        let createWallet = ReactSession.get("createWallet");

        if(loggedUser == null){
            window.location.href = "http://localhost:3000/403";
        }

        console.log(createWallet);
        console.log(ReactSession.get("walletsQuantity"));

        if( (createWallet === null) && (ReactSession.get("walletsQuantity") === 2 )) {
            return(
                <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>
                            Ups!</h1>
                        <h2>
                            Wykorzystałeś limit darmowych portfeli!</h2>
                        <div className="error-details">
                        Usuń portfel lub kup funkcję dodawania większej ilości portfeli
                        </div>
                        <div className="error-actions">
                            <Link to="/dashboard" className="btn btn-primary btn-lg">
                            <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faHome} />
                                Wróć </Link>
                                <Link to="/payments" className="btn btn-primary btn-lg">
                            <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faShop} />
                                Przejdź do sklepu </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        }
        else{
            return (
                <div className="project">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Dodaj portfel</h5>
                                <hr />
                                <form onSubmit={(event) => this.submitHandler(event)}>
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.changeHandler(event, "name")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.name })} placeholder="Nazwa konta" />
                                        <p className="text-danger">{this.state.errors.name}</p>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => this.changeHandler(event, "accountNumber")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.accountNumber })} placeholder="Numer konta" />
                                        <p className="text-danger">{this.state.errors.accountNumber}</p>
                                    </div>
                                    <div className="form-group">
                                        <textarea onChange={(event) => this.changeHandler(event, "description")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.description })} placeholder="Opis"></textarea>
                                        <p className="text-danger">{this.state.errors.description}</p>
                                    </div>
                                    <div className="form-group">
                                        <select className="form-control form-control-lg" onChange={(event) => this.changeHandler(event, "priority")}>
                                            <option value={3}>Wyświetl priorytet</option>
                                            <option value={1}>Wysoki</option>
                                            <option value={2}>Średni</option>
                                            <option value={3}>Niski</option>
                                        </select>
                                    </div>
                                    <input type="submit" className="btn btn-primary btn-block mt-4" value="Stwórz" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

    const mapStateToProps = (state) => ({
        errors: state.errors
    })

export default connect(mapStateToProps, { createWallet })(CreateWallet)