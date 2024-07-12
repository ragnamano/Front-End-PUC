import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import './MenuSup.css';

function MenuSup() {
    return (
        <section className="MenuSup">
            {/* Use o Link para cada rota que deseja chamar */}
            <Link to="/cadastro" className="superior__item">Cadastro</Link>
            <Link to="/retirada" className="superior__item">Retirada</Link>
            <Link to="/reposicao" className="superior__item">Repósição</Link>
            <Link to="/inventario" className="superior__item">Inventário</Link>
        </section>
    );
}

export default MenuSup;
