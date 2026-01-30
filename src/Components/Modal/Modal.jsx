import "./Modal.css"
import { IoExitSharp } from "react-icons/io5";
import { GoX } from "react-icons/go";
export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="container-modal" onClick={onClose}>
      <div
        className="menu-side"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="close-modal"><GoX /></button>
        <button className="buttonMenuSideModal" >Central de Conta</button>
        <button className="buttonMenuSideModal" >Meu Plano</button>
        <button className="buttonMenuSideModal" >Pagamentos</button>
        <button className="buttonMenuSideModal" >Mensagens Automáticas</button>
        <button className="buttonExitModal" >Sair <IoExitSharp size={15}/> </button>
      </div>
    </div>
  );
}
