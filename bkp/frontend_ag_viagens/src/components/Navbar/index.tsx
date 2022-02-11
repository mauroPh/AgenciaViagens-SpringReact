import { ReactComponent as ViagensIcon } from 'assets/img/airplane.svg';
import './styles.css';


function Navbar(){
    return (
       
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/home"><ViagensIcon/> <>Agência de Viagens</> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Destinos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/form/1">Pacotes</a>
                            </li>
                                                  
                        </ul>
                     
                    <a className="nav-link" href="/login">
                        <button className="btn agviagens-btn-outline-success" type="submit">Entre ou cadastre-se</button>
                    </a>

                        
                    </div>
                </div>
            </nav>
    )
}
export default Navbar;