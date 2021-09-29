import { useQuery } from '@apollo/react-hooks';
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carousel.css";
import {EPISODEBYID} from "../../graphql/EpisodeByID";


const handleDragStart = (e) => e.preventDefault();


 
const Gallery = ({ id}) => {

  const { data } = useQuery(EPISODEBYID, {variables: {id}});

  const items = data && data.characters && data.characters.map((characters) => (
    <div className="carouselItem">
      
      <img
        src={characters.image}
        alt={characters.id}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{characters.name}</b>
      
    </div>
  ));
 
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Gallery;