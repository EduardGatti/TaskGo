
import { FiExternalLink } from "react-icons/fi";
import { CiChat1, CiPhone, CiInstagram, CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./Footer.css"

function Footer() {
  return (
    <div className='container-footer'>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
        <h3 className="titleFooter">Guia</h3>
        <li className="listFooter">
          <a 
          href="/Home"
          className="direction"
          >
            Ínicio
            <FiExternalLink size={14} />
          </a>
          
        </li>
      </ul>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <h3 className="titleFooter">Suporte</h3>
        <li className="listFooter">
          <a
            href="https://wa.me/5548991235088?text=Olá,%20tenho%20uma%20duvida!"
            target='_blank'
            rel="noopener noreferrer"
            className="direction"
          >
            <CiChat1 size={20} />
            <span>Chat Online</span>
            <FiExternalLink size={14} />
          </a>

          <br />

          <a
            href="mailto:taskgowt@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="direction"
          >
            <HiOutlineMail size={20} />
            <span>E-mail</span>
            <FiExternalLink size={14} />
          </a>

          <br />

          <a
            href="tel:+5548991235088"
            className="direction"
          >
            <CiPhone size={20} />
            <span>Fale Conosco</span>
            <FiExternalLink size={14} />
          </a>
          <br />
        </li>
      </ul>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <h3 className="titleFooter" >Siga-nos</h3>
        <li className="listFooter">
          <a
            href="https://wa.me/5548991235088?text=Olá%20Gatti,%20tenho%20interesse%20em%20saber%20sobre%20o%20sistema%20TaskGo!"
            className="direction"
          >
            <FaWhatsapp size={30} />
          </a>
          <a
            href="https://m.me/61587241438338"
            target="_blank"
            rel="noopener noreferrer"
            className="direction"
          >
            <CiFacebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/taskgo.wt"
            target="_blank"
            rel="noopener noreferrer"
            className="direction"
          >
            <CiInstagram size={30} />
          </a>
        </li>
      </ul>


    </div>
  )
}

export default Footer