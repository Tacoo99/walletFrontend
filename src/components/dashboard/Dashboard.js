import React, { Component } from 'react'
import DashboardItem from './DashboardItem'
import {connect} from 'react-redux'
import {getWallets} from '../../actions/projectActions'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ReactSession }  from 'react-client-session';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../App.css"
import {Link} from 'react-router-dom'


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
             totalBalance:0.0
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.wallets){
            let totalBal = 0
            for(let i=0;i<nextProps.wallets.length;i++){
                totalBal=totalBal+nextProps.wallets[i].currentBalance
            }
            this.setState({totalBalance:totalBal})
        }
    }

    componentDidMount(){
        this.props.getWallets()
    }

    render() {

        let loggedUSer = ReactSession.get("loggedUser");
        if(loggedUSer == null){
            window.location.href = "http://localhost:3000/403";
        }
        else{
        const wallets = this.props.wallets
        const walletComponent = wallets.map(wallet=>(<DashboardItem key={wallet.id} wallet={wallet} />))

        return (
            <div className="projects">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 style={{
                                marginBottom: '2%'
                                }}
                                className="display-4 text-center">Moje portfele</h1>
                            <hr/>
                            <Link to="/createwallet" className="btn btn-primary btn-lg">
                            <FontAwesomeIcon style={{
                                            marginRight: 5
                                        }}

                                            icon={faPlus} />
                                Dodaj portfel </Link>
                            
                           
                            <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                    <h4>Stan konta (Suma)</h4>
                                    <h1>{this.state.totalBalance} zł</h1>
                                </div>
                            </div>
                           
                            {walletComponent}

                        </div>
                    </div>
                </div>
                </div>
            
        )
    }
}
}
const mapStateToProps = (state) => ({
    wallets:state.wallet.wallets
})
export default connect(mapStateToProps,{getWallets})(Dashboard)
