import MovieScore from "components/DestinoScore";
import { Link } from "react-router-dom";


function DestinoCard7() {

    const destino7 = {
        id: 1,
        image: "https://tools-images.services.cvc.com.br/resize?height=204&quality=80&type=auto&url=https%3A%2F%2Fs3.amazonaws.com%2Fcvc-bancodeimagens%2Fdestinos%2Ffernando-de-noronha-baia-porcos-pe-brasil.jpg&width=312",
        title: "Fernando de Noronha - PE",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="agviagens-destino-card-image" src={destino7.image} alt={destino7.title} />
            <div className="agviagens-card-bottom-container">
                <h3>{destino7.title}</h3>
                <MovieScore />
                <Link to={`/form/${destino7.id}`}>
                    <div className="btn btn-primary agviagens-btn">Selecionar</div>
                </Link>

            </div>
        </div>
    );

}
export default DestinoCard7;


