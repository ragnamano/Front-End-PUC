import React from 'react';
import Top from '../../componentes/Top';
import MenuSup from '../../componentes/MenuSuperior';
import Lista from '../../componentes/Lista';
import Rodape from '../../componentes/Rodape';
import Materiais from '../../Dados/Materiais/Materiais.json';

const Inventario = () => {
    
    return (  
        <div className="App">
            <Top />
            <MenuSup />
            <Lista items={Materiais}/>
            <Rodape />
        </div>
    );
};

export default Inventario;
