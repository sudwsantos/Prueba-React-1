import React, {useState, useEffect} from 'react';
import Personages from './Personages';

// Desarrollando la funcion fetch para poder crear una promesa con el link de la api publica elegida

const MiApi = () => {

    const [personages, setPersonages] = useState([]);

    const initUrl = 'https://rickandmortyapi.com/api/character';
    // Esta funcion esta a cargo de llamar a red 
    const fetchPersonages = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPersonages(data.results))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchPersonages(initUrl)
    }, [])

  return (
    <>
    <Personages personages={personages} />
    </>
  )
}

export default MiApi