import { useSelect } from "@/Context/Context";
import './Favorites.css'
import Card from '../Principal/Card/Card';
import { TbMoodSad } from "react-icons/tb";
import { useEffect, useState } from "react";

const Favorites = () => {
  const { selectedFavorites} = useSelect();
  const [noFavorites, setNoFavorites] = useState(false)


  useEffect(() => {
    if (selectedFavorites.filter((card) => card.selected == true).length == 0) {
      setNoFavorites(true);
    } else {
      setNoFavorites(false);
    }
  }, [selectedFavorites]);
  
  return (
    <div className="favorite__container">
      <h2 className='favorite__titulo'>Mis Favoritos</h2>
      {noFavorites ? (
        <div className="favorite__zero">
          <TbMoodSad />
          <p className="zero-titulo">No hay Favoritos</p>
        </div>
      ) : (
        <div className="card-list">
          {selectedFavorites.filter((card) => card.selected === true).map((card) => (
            <Card key={card.idInmueble} data={card} favorite={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;