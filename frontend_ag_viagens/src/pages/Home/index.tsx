import Carousel from "components/Carousel";

function Home() {


    return (
        <>
   <Carousel/>

<div className="row">
    <div className="col-md-4">
        <h2>Agenda Teatral</h2>
        <ul>
            <li><a href="#">TUDO QUE É IMAGINÁRIO EXISTE, É E TEM</a></li>
            <li><a href="#">DONA MARIA DO DOCE</a></li>
            <li><a href="#">HISTÓRIAS AFROBRASILEIRAS NO TEATRO</a></li>
        </ul>
    </div>
    <div className="col-md-4">
        <h2>Agenda Musical</h2>
        <ul>
            <li><a href="#">Giovani Cidreira</a></li>
            <li><a href="#">TUYO</a></li>
            <li><a href="#">Emicida</a></li>
            <li><a href="#">André Gonçalves</a></li>
            <li><a href="#">Marcos Ferreira</a></li>
        </ul>
    </div>
    <div className="col-md-4">
        <h2>Agenda Gastronômica</h2>
        <ul>
            <li><a href="#">Kitanda das Minas</a></li>
            <li><a href="#">Prato Firmeza</a></li>
            <li><a href="#">Kaza 123</a></li>
            <li><a href="#">Afro Gourmet</a></li>
            <li><a href="#">Casa Omolokum</a></li>
        </ul>
    </div>
</div>
<div className="bg-warning my-8">
            <div className="container p-8">

                <div>
                    <div>
                        <h1>Contato</h1>
                    </div>
                    <div>
                        <form className="row g-1">
                            <div className="col-md-3">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-3">
                                <input type="email" className="form-control" id="inputEmail4"/>
                            </div>
                            
                            <br />
                            <br />
                            <br />
                            <div className="col-md-6">
                            </div>
                            <br />
                            <br />
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-warning" >Enviar</button>
                            </div>
                            
                            
                            
                        </form>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
        </>
    );
}

export default Home;