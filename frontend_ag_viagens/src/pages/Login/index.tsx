import './login.css';


function Login() {


    return (
        <body className="login-body">
           <form className="login-form"> 
          

                <h2>Login</h2>
                <input id="email" type="email" name="email" placeholder="seuemail@email.com" required />
                <input type="password" name="senha" placeholder="Senha ***" required />
                <input type="submit" name="acao" placeholder="Enviar" />


                <a href="">Esqueceu sua senha ?</a>
                <p>Não tem uma conta?<a href="/cadastro">Registre-se</a></p>
                <hr className="hr"/>
                    <div className="p">ou</div>
                    <hr className="hr"/>

                    <button className="botoes button-google">Entrar com o Google</button>
                    <button className="botoes button-facebook">Entrar com o Facebook</button>
                   
            </form > 
        </body > 
    
    );
}

export default Login;