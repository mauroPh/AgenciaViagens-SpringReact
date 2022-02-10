import MovieScore from "components/DestinoScore";
import { Link } from "react-router-dom";


function DestinoCard3() {

    const destino3 = {
        id: 1,
        image: "https://tools-images.services.cvc.com.br/resize?height=204&quality=80&type=auto&url=https%3A%2F%2Fs3.amazonaws.com%2Fcvc-bancodeimagens%2Fdestinos%2Fnatal-baia-formosa-praia-sagi-bugue-divulgacao-cvc.jpg&width=312",
        title: "Natal-RN",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="agviagens-destino-card-image" src={destino3.image} alt={destino3.title} />
            <div className="agviagens-card-bottom-container">
                <h3>{destino3.title}</h3>
                <MovieScore />
                <Link to={`/form/${destino3.id}`}>
                    <div className="btn btn-primary agviagens-btn">Selecionar</div>
                </Link>

            </div>
        </div>
    );

}
export default DestinoCard3;


