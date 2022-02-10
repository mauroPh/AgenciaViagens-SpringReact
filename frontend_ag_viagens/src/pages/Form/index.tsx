import { Link } from 'react-router-dom';
import './styles.css';


function Form(){

    const pacote = {
        id: 1,
        image: "https://meuroteirordc.com.br/wp-content/uploads/2020/08/iStock-489556478.jpg",
        title: "Seu pacote com hotel e aéreo",
        count: 2,
        score: 4.5
    };

    return(

        <div className="agviagens-form-container">
        <img className="agviagens-destino-card-image" src={pacote.image} alt={pacote.title} />
        <div className="agviagens-card-bottom-container">
            <h3>{pacote.title}</h3>
            <form className="agviagens-form">
                <div className="form-group agviagens-form-group">
                    <label htmlFor="email">Informe seu email</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                   
                <div className="form-group agviagens-form-group">
                    <label htmlFor="score">Escolha o destino de sua viagem :</label>
                    <select className="form-control" id="score">
                            <option>1-Jericoacoara - CE</option>
                            <option>2-Búzios-RJ</option>
                            <option>3-Natal-RN</option>
                            <option>4-Rio de Janeiro</option>
                            <option>5-Bonito - MS</option>
                            <option>6-Foz do Iguaçu - PR</option>
                            <option>7-Fernando de Noronha - PE</option>
                            <option>8-Ilhéus - BA</option>
                    </select>
                </div>
                    <div className="form-group agviagens-form-group">
                        <label htmlFor="number">Adultos :</label>
                        <input type="number" className="form-control" id="CPF" />
                    </div>
                    <div className="form-group agviagens-form-group">
                        <label htmlFor="number">Crianças :</label>
                        <input type="number" className="form-control" id="CPF" />
                    </div>
                <div className="agviagens-form-btn-container">
                    <button type="submit" className="btn btn-primary agviagens-btn">Reservar</button>
                </div>
            </form >
            <Link to="/destinos">
            <button className="btn btn-primary agviagens-btn mt-3">Cancelar</button>

            </Link>
        </div >
    </div >
    );
}

export default Form;