import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import MainMenu from './components/MainMenu';
import Dashboard from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import store from './Store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateWallet from './components/dashboard/dashboardoperations/CreateWallet';
import NotFound from './components/shared/NotFound';
import MyAccount from './components/dashboard/MyAccount';
import UpdateWallet from './components/dashboard/dashboardoperations/UpdateWallet';
import Transaction from './components/transactions/Transaction';
import AddTransaction from './components/transactions/transactionoperations/AddTransaction';
import Facebook from './components/shared/FacebookLogin'
import AccessDenied from './components/shared/AccesDenied';
import Payments from './components/dashboard/dashboardoperations/Payments';
import Success from './components/paypal/Success';
import Failed from './components/paypal/Failed';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" exact component={MainMenu} />
          <Route path="/success" exact component={Success} />
          <Route path="/failed" exact component={Failed} />
          <Route path="/payments" exact component={Payments} />
          <Route path="/403" exact component={AccessDenied} />
          <Route path="/login" exact component={Facebook} />
          <Route path="/account" exact component={MyAccount} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/createwallet" exact component={CreateWallet} />
          <Route path="/updatewallet/:id" exact component={UpdateWallet} />
          <Route path="/transactions/:id" exact component={Transaction} />
          <Route path="/trns/add/:id" exact component={AddTransaction} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;