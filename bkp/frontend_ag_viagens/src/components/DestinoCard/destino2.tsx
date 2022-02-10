import MovieScore from "components/DestinoScore";
import { Link } from "react-router-dom";



function DestinoCard2() {



    const destino2 = {
        id: 2,
        image: "https://tools-images.services.cvc.com.br/resize?height=282&quality=80&type=auto&url=https%3A%2F%2Fs3.amazonaws.com%2Fcvc-bancodeimagens%2Fdestinos%2Fbuzios-praia-de-ossos-rj-brasil-GettyImages-513392457.jpg&width=423",
        title: "Búzios-RJ",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="agviagens-destino-card-image" src={destino2.image} alt={destino2.title} />
            <div className="agviagens-card-bottom-container">
                <h3>{destino2.title}</h3>
                <MovieScore />
                <Link to={`/form/${destino2.id}`}>
                    <div className="btn btn-primary agviagens-btn">Selecionar</div>
                </Link>

            </div>
        </div>
    );

}
export default DestinoCard2;