import Footer from '../../Components/Footer/Footer'
import './Login.css'
function Login() {
    return (
        <>
            <div className='container-login'>
                <div className='field'>

                    <img src="taskgoLogo.png" alt="" />

                </div>
                <div className='field-login'>
                    <h3 className='title-login'>
                        Bem-vindo de volta
                    </h3>

                    <label htmlFor="email">
                        E-mail
                    </label>

                    <input type="email" placeholder='nome@exemplo.com' className='inputlogin'/><br />

                    <label htmlFor="password">
                        Senha
                    </label>

                    <input type="password" placeholder='********' className='inputlogin' /><br />

                    <button className='buttonlogin'>
                        Entrar
                    </button>
                    <p style={{display:'flex', justifyContent:"center"}}>Não possui uma conta ainda?  <a href="/register" style={{marginLeft:'3px', color:'#f15a24'}}> Cadastra-se</a></p>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Login