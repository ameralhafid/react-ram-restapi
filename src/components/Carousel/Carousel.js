import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../config/config";
import "./Carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Gallery = ({ id}) => {
  const [episode, setEpisode] = useState([]);

  const items = episode?.map((c) => (
    <div className="carouselItem">
      <img
        src={c?.image ? `${img_300}/${c?.characters?.id}.jpeg` : noPicture}
        alt={c?.id}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c.characters?.name}</b>
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

  const fetchEpisode = async () => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    setEpisode(data.characters);
  };

  useEffect(() => {
    fetchEpisode();
    // eslint-disable-next-line
  }, []);

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