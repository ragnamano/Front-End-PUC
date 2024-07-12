import React from 'react';
import './Lista.css'; // Arquivo CSS para estilização

const Lista = ({ items }) => {
  return (
    <div className="retangulo">
      <div className="topo-cinza">
        <h2 className="titulo-branco">Lista de Itens</h2>
      </div>
      <div className="corpo-cinza">
      <ul className="lista-branca">
          {items.map((item, index) => (
                        <li key={index} className="item-lista">
                          <div><strong>{item.material}</strong></div><div>{item.categoria}</div><div>{item.quantidade}</div>       
                        </li>
                    ))}
        </ul>
      </div>
    </div>
  );
};

export default Lista;
