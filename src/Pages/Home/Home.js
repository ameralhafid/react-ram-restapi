import axios from "axios";
import "./Home.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Home = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchHome = async () => {
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );

    setContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchHome();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Home</span>
      <div className="Home">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              image={c.image}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Home;
