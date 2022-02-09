import './login.css';


function Cadastro() {


    return (
        <body className="login-body">
            <form className="login-form">
                <h2>Cadastro</h2>
                <button className="botoes button-google">Cadastre-se com o Google</button>
                <button className="botoes button-facebook">Cadastre-se com o Facebook</button>
                <button className="button-email">Cadastre-se com seu email</button>

                <p>Já tem uma conta?<a href="/login">Faça login</a></p>
            </form>

        </body>

    );
}

export default Cadastro;