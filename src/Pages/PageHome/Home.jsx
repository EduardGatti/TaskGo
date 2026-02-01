import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Home.css'

function Home() {
  return (
    <>
      <Header />

      <div className="container-home">
        {/* HERO */}
        <div className="field-main">
          <p className="text">
            A TaskGo ajuda microempreendedores a automatizar <br />
            o atendimento no WhatsApp, tornando as respostas mais rápidas,
            organizadas e profissionais.
          </p>

          <img src="image.png" alt="TaskGo" className="image-main" />
        </div>

        {/* SOBRE */}
        <div className="field-text">
          <p className="title-main">Como surgimos?</p>

          <p className="text-main">
            Surgimos com o propósito de ajudar clínicas, imobiliárias e pequenas
            empresas que dependem do atendimento manual via WhatsApp, oferecendo
            um sistema de mensagens seletivas que melhora o gerenciamento do
            atendimento e otimiza a comunicação com seus clientes.
          </p>
        </div>

        {/* PLANOS */}
        <div className="cards-section">
          {/* BÁSICO */}
          <div className="card">
            <h3 className="title-card">Plano Básico</h3>
            <p className="price">R$ 49,90 / mês</p>

            <h4 className="title-card">Para quem?</h4>

            <p className="highlights-card">
              Microempreendedores que querem parar de responder tudo manualmente.
              <br /><br />
              ✔ Respostas automáticas básicas<br />
              ✔ Menu inicial no WhatsApp<br />
              ✔ Até 1 número de WhatsApp<br />
              ✔ Mensagens pré-configuradas<br />
              ✔ Suporte básico<br />
              ✔ Painel simples de controle
            </p>

            <button className="button-card">Contrate Agora</button>
          </div>

          {/* PROFISSIONAL */}
          <div className="card">
            <h3 className="title-card">Plano Profissional</h3>
            <p className="price">R$ 99,90 / mês</p>

            <h4 className="title-card">Para quem?</h4>

            <p className="highlights-card">
              Negócios que recebem muitos contatos por dia.
              <br /><br />
              ✔ Mensagens inteligentes por horário<br />
              ✔ Qualificação automática de clientes<br />
              ✔ Etiquetas / status de atendimento<br />
              ✔ Até 3 números de WhatsApp<br />
              ✔ Relatórios simples<br />
              ✔ Prioridade no suporte
            </p>

            <button className="button-card">Contrate Agora</button>
          </div>

          {/* EMPRESARIAL */}
          <div className="card">
            <h3 className="title-card">Plano Empresarial</h3>
            <p className="price">Sob consulta</p>

            <h4 className="title-card">Para quem?</h4>

            <p className="highlights-card">
              Empresas que precisam de alto volume e personalização.
              <br /><br />
              ✔ WhatsApps ilimitados<br />
              ✔ Fluxos personalizados<br />
              ✔ Integrações avançadas<br />
              ✔ Relatórios completos<br />
              ✔ Suporte dedicado
            </p>

            <button className="button-card">Entrar em contato</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home
