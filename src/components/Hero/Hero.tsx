import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.styles.css";
import { useAuth } from "@/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navegar = () => {
    if (auth.isAuthenticated){
      navigate("/inicio-sesion");
    }else{
      navigate("/principal");
    }
  }
  
  return (
    <div className="Hero">
      <div className="Hero-container">
        <p className="Hero-container__text">Bienvenido a</p>
        <h1 className="Hero-container__title">DREAMHOME</h1>
        <p className="Hero-container__text">Sitio Web Inmobiliario</p>
        <p onClick={navegar} className="Hero-container__button">
          {auth.isAuthenticated ? "Principal" : "Ingresar"}
        </p>
      </div>
    </div>
  );
};

export default Hero;
