import { Link } from "react-router-dom";
import './styles.css';



function HomeCard() {

    const home = {
        id: 1,
        image: "https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727_960_720.jpg",
        title: "Viaje pelo Brasil",
    };

    return (
        <div className = "agviagens-home-card-image">
               <figure id="container">
                <img className="agviagens-destino-card-image"src={home.image} alt={home.title} />
                <figcaption>Viajar é expandir horizontes, conhecer pessoas, ampliar laços e construir memórias.As experiências de uma viagem fogem da nossa zona de conforto e nos desafiam a conhecer novas culturas e novos lugares que nos marcam para sempre.
                    <div className="agviagens-button-home">
                            <Link to={`/destinos`}>
                                <div className="btn btn-primary">Escolha seu próximo destino aqui</div>
                            </Link>
                    </div>
               
                </figcaption>
                
               </figure>
            
        </div>
    );

}
export default HomeCard;
