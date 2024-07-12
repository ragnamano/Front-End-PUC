import Botão from '../Botão'
import CampoTexto from '../CampoTexto'
import './Formulario.css'
import React, { useState, useEffect } from 'react';

function Formulario() {
    const [material, setMaterial] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoria, setCategoria] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [materiais, setMateriais] = useState([]);

    useEffect(() => {
        fetch('/Dados/Materiais.json') // Caminho relativo ao diretório public ou ao servidor
            .then(response => response.json())
            .then(data => setMateriais(data))
            .catch(error => console.error('Erro ao carregar materiais:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Criar um novo item com os dados do formulário
        const newItem = {
            material,
            descricao,
            categoria,
            quantidade: parseInt(quantidade) // Convertendo para número inteiro
        };

        setMateriais([...materiais, newItem]);

        // Limpar os campos do formulário após o cadastro
        setMaterial('');
        setDescricao('');
        setCategoria('');
        setQuantidade('');
    };
        return(
        
        <section className='formulario'>
            <div className="retangulo">
                <div className="topo-cinza">
                    <h2 className="titulo-branco">Cadastro de Materiais</h2>
                </div>
                <div className="corpo-cinza"></div>
                    <form onSubmit={handleSubmit}>
                        <CampoTexto obrigatorio={true} label="Material" placeholder="Digite o Material" type="text" name="Material" value={material} onChange={(e) => setMaterial(e.target.value)}/>
                        <CampoTexto obrigatorio={true} label="Descrição" placeholder="Digite a Descrição" type="text" name="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                        <CampoTexto obrigatorio={true} label="Categoria" placeholder="Digite a Categoria" type="text" name="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}/>
                        <CampoTexto obrigatorio={true} label="Quantidade" placeholder="Digite a Quantidade" type="number" name="Quantidade" value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>
                        <Botão type="submit">
                            Cadastrar    
                        </Botão>
                    </form>
            </div>
        </section>
        
    )
}
export default Formulario