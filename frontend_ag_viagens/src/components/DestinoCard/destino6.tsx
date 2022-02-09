import DestinoScore from "components/DestinoScore";
import { Link } from "react-router-dom";


function DestinoCard6() {

    const destino6 = {
        id: 1,
        image: "https://tools-images.services.cvc.com.br/resize?height=204&quality=80&type=auto&url=https%3A%2F%2Fs3.amazonaws.com%2Fcvc-bancodeimagens%2Fdestinos%2Ffoz-do-iguacu-cachoeiras-cataratas-vista-aerea-337634303.jpg&width=312",
        title: "Foz do Iguaçu - PR",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="agviagens-destino-card-image" src={destino6.image} alt={destino6.title} />
            <div className="agviagens-card-bottom-container">
                <h3>{destino6.title}</h3>
                <h4>$450,00 /adulto</h4>
                <DestinoScore />
                <Link to={`/form/${destino6.id}`}>
                    <div className="btn btn-primary agviagens-btn">Selecionar</div>
                </Link>

            </div>
        </div>
    );

}
export default DestinoCard6;


