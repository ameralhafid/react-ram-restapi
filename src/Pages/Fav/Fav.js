import "./Fav.css";
import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {CHARACTERBYID} from "../../graphql/CharacterByID";
import SingleContent from "../../components/SingleContent/SingleContent";


const Fav = () => {


          const fav = localStorage.getItem('fav');
     console.log(fav);
    const { data } = useQuery(CHARACTERBYID, {variables: {fav}});

    console.log(data);

    return (

    <div>
        <span className="pageTitle">Discover Characters ...</span>

        <div className="characters">
            {data && data.character.map((c) => (
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

