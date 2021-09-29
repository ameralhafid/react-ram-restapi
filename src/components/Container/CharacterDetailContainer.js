import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {CHARACTERBYID} from "../../graphql/CharacterByID";
import {CharacterByID} from "../../Pages/Details/CharacterDetail";
import {useParams} from 'react-router-dom';

export function CharacterDetailContainer() {
    let { id } = useParams();

    const { data } = useQuery(CHARACTERBYID, {variables: {id}});
  return (
        <div className="character">
            {data && data.character &&
                 <CharacterByID key={data.character.id} character={data.character} />
            }
        </div>
  );
}
