import Footer from "../../Components/Footer/Footer"
import "./Register.css"
function Register() {
    return (
        <>
            <div className="container-register">
                <div className="field">
                    <img src="taskgoLogo.png" alt="" />
                </div>
                <div className="field-register">

                    <h3 className="title-register">
                        Entre para a plataforma
                    </h3>

                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="email" placeholder="name@dominio.com" className="inputregister" />
                    <label htmlFor="name">
                        Nome
                    </label>
                    <input type="text" placeholder="Seu nome" className="inputregister" />
                    <label htmlFor="password">
                        Senha
                    </label>
                    <input type="password" placeholder="********" className="inputregister" />
                    <label htmlFor="date">Data de Nascimento</label>
                    <input type="date" placeholder="**/**/****" className="inputregister" />
                    <button className="buttonregister">Cadastra-se</button>
                    <p style={{display:'flex', justifyContent:"center"}}>Já possui um cadastro? <a href="/" style={{marginLeft:'4px', color:'#f15a24'}}>Logar</a></p>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register