import React, {useState, useEffect} from 'react';
import Personages from './Personages';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Desarrollando la funcion fetch para poder crear una promesa con el link de la api publica elegida

const MiApi = () => {

    const [personages, setPersonages] = useState([]);
    const [busqueda, setBusqueda] = useState([]);
 
    // En esta parte del codigo es donde llamo a la API a ser consumida
    const initUrl = 'https://rickandmortyapi.com/api/character';
    
    const fetchPersonages = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPersonages(data.results))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        fetchPersonages(initUrl)
    }, [])

    const handleChange = e => {
      setBusqueda(e.target.value);
      filtrar(e.target.value);
  }

    const filtrar = terminoBusqueda => {
      let resultadosBusqueda=personages.filter((item) => {
      if(item.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return item ;
      }    
    })
    setPersonages(resultadosBusqueda);
  }

  return (
     <div className='containerInput'>
        <input className='form-control intBuscar'
          value={busqueda}
          placeholder='Quien es su personage favorito?'
          onChange={handleChange}
        />
        <button className='btn btn-success'>
          <FontAwesomeIcon icon={faSearch} />
        </button>
     
        <div className='container mt-5'>
          <Personages personages={personages} />
        </div>
     </div>
  )
}

export default MiApi