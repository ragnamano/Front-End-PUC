import './Top.css'
import { Link } from 'react-router-dom';
function Top(){

    return(
        <header className="top">
            <div className="logo">
            <Link to="/" className="superior__item"><img src="/imagens/logo.png" alt="Logo"/></Link>
            </div>  
            <div className="icones">
                <img src="/imagens/user.png" alt="Usuario"/> 
                <img src="/imagens/bell.png" alt="Notificações"/> 
                <img src="/imagens/envelope.png" alt="Mensagens"/>
            </div>
        </header>
        
        
    )
}
export default Top