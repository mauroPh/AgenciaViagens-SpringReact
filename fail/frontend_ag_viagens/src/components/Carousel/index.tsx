import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Carrossel() {
  
    return (

<div className="container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://resortnabahia.com.br/wp-content/uploads/2019/01/praia-calma.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.braziliereisspecialist.nl%2Freizen%2Fdetail%2F15-daagse-reis-brazilie-stad-en-strand-voor-2-personen-start-11-september.html&psig=AOvVaw0rufA2M754_vntsih5cA4f&ust=1644046663866000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCc16TF5fUCFQAAAAAdAAAAABAD" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fviagemeturismo.abril.com.br%2Fcoluna%2Fbrasis%2Fatracoes-florianopolis-inverno-sem-entrar-no-mar-gelado%2F&psig=AOvVaw3GtfS_FfGz78RYVthF7cyM&ust=1644046726597000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJic2cfF5fUCFQAAAAAdAAAAABAJ" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>



    )

}
export default Carrossel;


