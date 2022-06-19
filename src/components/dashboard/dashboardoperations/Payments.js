import React, { useState } from 'react'
import PayPal from "../../paypal/PayPal"
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactSession }  from 'react-client-session';


function Payments() {

    const [checkout, setCheckOut] = useState(false);

    function Order() {
        let createWallet = ReactSession.get("createWallet");
        let currUser = ReactSession.get("loggedUser");
        if(createWallet !== currUser){
        setCheckOut(true);
    }
    else{
        alert('Posiadasz już tą funkcję!')

    }
}

    return (
        <div className='Payments'>
            {checkout ? (
                
                <div className='row justify-content-center text-center'>
                    <span className="light-overlay text-dark display-3 mb-4">Wybierz metodę płatności</span>
                            <hr />
                <div className='col-lg-5 col-md-auto shadow p-3 mb-5 bg-white rounded '>
                <PayPal />
                </div></div>
            ) : (
                <div className="light-overlay text-dark">
                    <div
                        style={{
                            marginTop: "2%",
                        }}
                        className="container"
                    >
                        <div
                            style={{
                                marginTop: "3%",
                                flex: 1,
                                alignItems: "row",
                            }}
                            className="row justify-content-center"
                        >
                            <div className="text-center">
                            <h1 className="display-3 mb-4">Sklep</h1>
                            <hr />
                            <div title="Funkcja dodawania portfeli" onClick={() => {Order()} } className="col-lg-2 col-md-auto m-3 shadow p-3 mb-5 bg-white rounded hoverStyle">
                                <FontAwesomeIcon
                                    size="6x"
                                    style={{
                                        margin: "10%",
                                    }}
                                    icon={faWallet}
                                />
                                <p className="lead">Dodawanie portfeli</p>
                                
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
            )}
            
        </div>
    );


}

export default Payments;