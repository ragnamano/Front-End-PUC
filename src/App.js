import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Inventario from './Pages/Inventario/Inventario';
import Cadastro from './Pages/Cadastro/Cadastro';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Inventario" element={<Inventario />} />
                    <Route path="/Cadastro" element={<Cadastro />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
