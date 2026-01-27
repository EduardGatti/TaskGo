import { CiUser } from "react-icons/ci"
import "./Header.css"
function Header() {
  return (
    <div className='container-header'>
        <img src="taskgoLogo.png" alt="" className='logotipo'/>
        <input type="search" placeholder='Pesquise...' className='search'/>
        <button className="ButtonUser"><CiUser color="#E24A17" size={40}/></button>
    </div>
  )
}

export default Header