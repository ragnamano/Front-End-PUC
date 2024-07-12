import './Rodape.css'
function Rodape(){

    return(
        <footer className="Rodape">
            <div className="Titulo">
                <h1 class="interior__title">Sobre</h1>
            </div>
            <div className="Conteudo">
                <a class="inferior__item" href="/">Fale Conosco</a>
                <a class="inferior__item" href="/">Anuncie</a>
                <a class="inferior__item" href="/">Privacidade</a>
                <a class="inferior__item" href="/">Quem somos</a>
            </div>
        </footer>
        
    )
}
export default Rodape