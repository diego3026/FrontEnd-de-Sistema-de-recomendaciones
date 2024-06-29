import "./ContactUs.styles.css";
import '../Alert/AlertExito'
import AlertExito from "../Alert/AlertExito";

const Contact: React.FC = () =>{

  const handleMensaje = () => {
    AlertExito({message: "Su mensaje se ha enviado"});
  }

  return (
    <div className="ContactUs">
      <div className="ContactUs-container">
        <div className="ContactUs-container__text">
          <div className="ContactUs-container__text-text">
            <h1>Contactanos</h1>
            <p>Si tu necesitas ayuda o cualquier otra pregunta, no dudes en preguntar</p>
          </div>
          <div className="ContactUs-container__text-inputs">
            <input type="text" placeholder="Nombre completo" />
            <input type="text" placeholder="Numero de celular" />
            <textarea placeholder="Mensaje"></textarea>
            <button onClick={handleMensaje}>Enviar Mensaje</button>
          </div>
        </div>
        <div className="ContactUs-container__image">
          {/* <img src={img} alt="DreamHome" /> */}
        </div>
      </div>
    </div>
  );
}
export default Contact