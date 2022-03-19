import DestinoScore from "components/DestinoScore";
import { Link } from "react-router-dom";



function DestinoCard1(){

    const destino1 = {
        id: 1,
        image: "https://tools-images.services.cvc.com.br/resize?height=204&quality=80&type=auto&url=https%3A%2F%2Fs3.amazonaws.com%2Fcvc-bancodeimagens%2Fdestinos%2Fjericoacoara-duna-por-do-sol-lateral-ce.jpg&width=312",
        title: "Jericoacoara - CE",
        count: 2,
        score: 4.5
    };

return(
    <div>
        <img className="agviagens-destino-card-image"src={destino1.image} alt={destino1.title} />
    <div className="agviagens-card-bottom-container">
        <h3>{destino1.title}</h3>
        <h4>$450,00 /adulto</h4>
                    <DestinoScore />
        <Link to={`/form/${destino1.id}`}>
              <div className="btn btn-primary agviagens-btn">Selecionar</div>
        </Link>
       
    </div>
</div>
);

}
export default DestinoCard1;


