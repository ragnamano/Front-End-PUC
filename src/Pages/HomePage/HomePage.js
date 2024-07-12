import React from 'react';
import Top from '../../componentes/Top';
import MenuSup from '../../componentes/MenuSuperior';
import CarosselBanner from '../../componentes/CarosselBanner';
import Lista from '../../componentes/Lista';
import Rodape from '../../componentes/Rodape';

const HomePage = () => {
    const images = [
        '/imagens/banner1.png',
        '/imagens/banner2.png',
        '/imagens/banner3.png',
      ];
      const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
    
      return (  
        <div className="App">
            <Top />
            <MenuSup />
            <CarosselBanner images={images} />
            <Lista items={items}/>
            <Rodape />
        </div>
      );
};

export default HomePage;
