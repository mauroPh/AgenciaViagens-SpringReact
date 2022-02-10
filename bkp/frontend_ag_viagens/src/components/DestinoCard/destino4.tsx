import MovieScore from "components/DestinoScore";
import { Link } from "react-router-dom";


function DestinoCard4() {

    const destino4 = {
        id: 1,
        image: "https://tools-images.services.cvc.com.br/resize?height=204&quality=80&type=auto&url=https%3A%2F%2Fs3.amazonaws.com%2Fcvc-bancodeimagens%2Fdestinos%2Frio-de-janeiro-cristo-redentor-rj-508905655.jpg&width=312",
        title: "Rio de Janeiro",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="agviagens-destino-card-image" src={destino4.image} alt={destino4.title} />
            <div className="agviagens-card-bottom-container">
                <h3>{destino4.title}</h3>
                <MovieScore />
                <Link to={`/form/${destino4.id}`}>
                    <div className="btn btn-primary agviagens-btn">Selecionar</div>
                </Link>

            </div>
        </div>
    );

}
export default DestinoCard4;


