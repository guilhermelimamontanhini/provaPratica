import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Login from './login/login';
import Pedidos from './pedidos/pedidos';

function Rotas() {
    return (
        <Router>
          <Routes>
            <Route path="/" exact element={<Login/>} />
            <Route path="/pedidos" element={<Pedidos/>} />
          </Routes>
        </Router>
    );
};

export default Rotas;