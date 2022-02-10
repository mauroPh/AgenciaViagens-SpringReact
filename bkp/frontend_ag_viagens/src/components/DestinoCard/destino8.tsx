import MovieScore from "components/DestinoScore";
import { Link } from "react-router-dom";


function DestinoCard8() {

    const destino8 = {
        id: 1,
        image: "https://tools-images.services.cvc.com.br/resize?height=282&quality=80&type=auto&url=https%3A%2F%2Fcvc-bancodeimagens.s3.amazonaws.com%2Fdestinos%2Filheus-vista-aerea-ba-1326874400.jpg&width=423",
        title: "Ilhéus - BA",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="agviagens-destino-card-image" src={destino8.image} alt={destino8.title} />
            <div className="agviagens-card-bottom-container">
                <h3>{destino8.title}</h3>
                <MovieScore />
                <Link to={`/form/${destino8.id}`}>
                    <div className="btn btn-primary agviagens-btn">Selecionar</div>
                </Link>

            </div>
        </div>
    );

}
export default DestinoCard8;


