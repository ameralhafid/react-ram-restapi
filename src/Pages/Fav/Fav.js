import "./Fav.css";
import React, {useState} from "react";
import SingleContent from "../../components/SingleContent/SingleContent";


const Fav = () => {

    let fav = JSON.parse(localStorage.getItem('fav'));
  //  const fav = localStorage.getItem('fav');
     console.log(fav);

    const [items] = useState([

        {
            id: fav,
        }
    ]);


    console.log(items);

    return (

    <div>
        <span className="pageTitle">Favourites Characters ...</span>

        <div className="characters">
            {items.map((c) => (
                <SingleContent
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    title={c.type || c.name}
                    date={c.created }
                    status={c.status}
                    gender={c.gender}
                    species={c.species}
                />
            ))}
        </div>
    </div>
    );
};
export default Fav;

