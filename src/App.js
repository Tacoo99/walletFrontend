import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import MainMenu from './components/Welcome';
import Dashboard from './components/dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateWallet from './components/dashboard/operations/CreateWallet';
import NotFound from './components/shared/NotFound';
import MyAccount from './components/dashboard/MyAccount';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route path="/account" element={<><Nav /><MyAccount /></>} />
          <Route path="/dashboard" element={<><Nav /><Dashboard /></>} />
          <Route path="/createwallet" element={<><Nav /><CreateWallet /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  );
}

export default App;
