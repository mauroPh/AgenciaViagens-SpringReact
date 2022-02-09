import DestinoScore from "components/DestinoScore";
import { Link } from "react-router-dom";


function DestinoCard5() {

    const destino5 = {
        id: 1,
        image: "https://tools-images.services.cvc.com.br/resize?height=204&quality=80&type=auto&url=https%3A%2F%2Fs3.amazonaws.com%2Fcvc-bancodeimagens%2Fdestinos%2Fbonito-estancia-mimosa-rio-cachoeiras-ms-brasil-divulgacao-cvc.jpg&width=312",
        title: "Bonito - MS",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="agviagens-destino-card-image" src={destino5.image} alt={destino5.title} />
            <div className="agviagens-card-bottom-container">
                <h3>{destino5.title}</h3>
                <h4>$450,00 /adulto</h4>
                <DestinoScore />
                <Link to={`/form/${destino5.id}`}>
                    <div className="btn btn-primary agviagens-btn">Selecionar</div>
                </Link>

            </div>
        </div>
    );

}
export default DestinoCard5;


