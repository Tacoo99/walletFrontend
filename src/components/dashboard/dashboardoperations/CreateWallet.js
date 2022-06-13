import React, { Component } from 'react'
import { createWallet } from '../../../actions/projectActions'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { ReactSession } from 'react-client-session';

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

        const logout = () => {
            window.location.href = "http://localhost:3000/403";
        }

        if(loggedUser == null){
            logout()
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
                                        <input type="text" onChange={(event) => this.changeHandler(event, "accountNumber")} className={classnames("form-control form-control-lg", { "is-invalid": this.state.errors.accountNumber })} placeholder="Nazwa konta" />
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
