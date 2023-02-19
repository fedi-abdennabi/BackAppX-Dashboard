import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Authentification from './pages/Authentification';
import Storage from './pages/Storage';
import ApiGen from './pages/ApiGen';
import Extensions from './pages/Extensions';
import Products from './pages/Products';


function App() {
    return (
      <div className="wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Dashboard/>}/>
            <Route exact path="/authentification" element={<Authentification/>}/>
            <Route exact path="/storage" element={<Storage/>}/>
            <Route exact path="/apigene" element={<ApiGen/>}/>
            <Route exact path="/extensions" element={<Extensions/>}/>
            <Route exact path="/products" element={<Products/>}/>

          </Routes>
        </Router>
      </div>
    
      );
}

export default App;
