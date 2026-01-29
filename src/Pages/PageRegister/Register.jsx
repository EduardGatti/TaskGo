import "./Register.css"
function Register() {
  return (
    <div className="container-register">
        <div className="field">
            <img src="taskgoLogo.png" alt="" />
        </div>
        <div className="field-register">

            <h3 className="title-register">
                Entre para a plataforma
            </h3>
        
            <label htmlFor="email">
                email
            </label>
            <input type="email" placeholder="name@dominio.com"/>
            <label htmlFor="name">
                nome
            </label>
            <input type="text" placeholder="Seu nome"/>
            <label htmlFor="password">
                Senha
            </label>
            <input type="password" placeholder="********" />
            <label htmlFor="date">Data</label>
            <input type="date" placeholder="**/**/****"/>

        </div>
    </div>
  )
}

export default Register