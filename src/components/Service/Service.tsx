import React, { useEffect } from 'react';
import './Service.css';
import AOS from 'aos'

const ServicesPage: React.FC = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div className="Service_container">
      <div className="Service_text-container">
        <h1 className="Service_body-main-text ">
          Deja <br /> <span className="Service_bold-text"> Todo</span> <br /> en Nuestras manos
        </h1>
        <p className="Service_sub-text">
          Según su preferencia, recomendamos las mejores propiedades de sitios como metrocuadrado y booking
        </p>

        <div className="Service_button-container">
          <a href="#" className="Service_orange-button">
            <strong className='hundred'>+1000</strong>  <br /> casas
          </a>
        </div>
      </div>

      <div className="Service_img-container">
        <img src=".\src\assets\PdescImage.png" alt="Image" />
      </div>
    </div>
  );
};

export default ServicesPage;