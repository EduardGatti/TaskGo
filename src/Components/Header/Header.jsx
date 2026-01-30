import { useState } from "react";
import { CiUser } from "react-icons/ci";
import "./Header.css";
import Modal from "../Modal/Modal";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='container-header'>
      <img src="taskgoLogo.png" alt="" className='logotipo' />

      <input
        type="search"
        placeholder='Pesquise...'
        className='search'
      />

      <button
        className="ButtonUser"
        onClick={() => setModalOpen(true)}
      >
        <CiUser color="#E24A17" size={40} />
      </button>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default Header;
