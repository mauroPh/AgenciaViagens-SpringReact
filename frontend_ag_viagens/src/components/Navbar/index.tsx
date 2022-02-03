import { ReactComponent as ViagensIcon } from 'assets/img/airplane.svg';
import './styles.css';


function Navbar() {
    return(
        <header>
            <nav className="container">
                
                <div className="agviagens-nav-content">
                 <a href="https://github.com/mauroPh">
                    <div className="agviagens-nav-icon">
                    <ViagensIcon /><p className="agviagens-contact-link"> Agência de Viagens</p>
                    </div>
                 </a> 
                <div className="agviagens-nav-pages-links">
                    <a href="" lang="en">Home</a>
                    <a href="">Destinos</a>
                    <a href="">Promoções</a>
                    <a href="li">Contato</a>
                    <a id="button" href="../../"> Entre ou Cadastre-se</a>
                 </div>
                </div>
                    
            </nav>
        </header>
    );
}

export default Navbar;