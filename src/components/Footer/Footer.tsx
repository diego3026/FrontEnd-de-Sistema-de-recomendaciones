import {useNavigate } from 'react-router-dom';
import './Footer.css';
import logo from "../../assets/logogid.png";


const Footer = ({styleC = false}:any) => {
  const navigate = useNavigate();

  const handleContact = async () => {
    navigate("/contactanos");
  };

  const handleNavigate = (url:string) => {
    navigate(url);
  }

  return (
    <footer className={`footer__container ${styleC ? 'estiloFixed':''}`}>
      <div className='footer__container-logo'>
        <img src={logo} alt="" />
        <p className='footer__texto-logo'>DreamHome</p>
      </div>
      <div className="footer__container-items">
        <a className="item" onClick={() => handleNavigate("/")}>Inicio</a>
        <a className="item" onClick={() => handleNavigate("/sobre-nosotros")}>Sobre Nosotros</a>
        <a className="item" onClick={() => handleNavigate("/servicios")}>Servicios</a>
      </div>
      <div className="footer__container-button">
        <h3 className='footer__text'>Vamos hacerlo! -</h3>
        <button onClick={handleContact} className="button__footer">Contactanos</button>
      </div>
    </footer>
  );
};

export default Footer;