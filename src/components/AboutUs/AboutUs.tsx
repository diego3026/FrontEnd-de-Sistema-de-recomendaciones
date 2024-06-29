import * as React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.styles.css';
import './responsive.css'

const AboutUs: React.FC = () => {

    useEffect(() => { 
        AOS.init({ duration: 1000 }); 
    }, []) 

    return (
        <div className='about-container'>
            <div className="wrapper">
                <div className="about-container__info">
                    <h2 className='about-info__titulo' data-aos='fade-up'>Sobre nosotros</h2>
                    <h3 className='about-info__subtitulo' data-aos='fade-up' >Más que una web inmobiliaria.</h3>
                    <p className='about-info__parrafo' data-aos='fade-up'>Utilizamos tecnología de punta para transformar la forma en que buscas tu próximo hogar. Imagina tener a tu disposición un asistente personalizado que entiende tus gustos y necesidades, y que trabaja incansablemente para encontrar propiedades que realmente te entusiasmen.</p>
                    <p className='about-info__resaltado' data-aos='fade-up'><b>¡El hogar perfecto te está esperando!</b></p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
