import React, { useState, useEffect, useCallback} from 'react'
import '../App.css';

const Players = () => {
  const [info, setInfo] = useState([]);

  
  const consultarInformacion = useCallback(async () => {
    const res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=287c5eea64944cfd9b45a6b7613d0f99")
    const data = await res.json()
    
    setInfo(`${data}`);
    console.log(data)
  }, []);
  
   
  useEffect(() => {
   console.log("useEffect");
     consultarInformacion();
   });

   if (!info) return <div>Cargando...</div>;
  
  
   return (
    <div className='leagues-container'>
      Players

    </div>
  )
}

export default Players;