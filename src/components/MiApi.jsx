import React, { useState, useEffect } from 'react'
import '../App.css';
import Players from './Players';
import Country from './Country';

const MiApi = () => {
    const [active, setActive] = useState(true);

    useEffect(() => {

    }, []);

  return (
    
    // 3. Crea un componente llamado MiApi.jsx e impórtalo dentro de App.jsx
    <div className='miapp-container'>
        <div className='tabs'>
            <div className='tab-players' onClick={() => setActive(true)}>
                <h2 style={{ color: active ? '#c20114' : null }}>Jugadores</h2>
            </div>
            <div className='tab-country' onClick={() => setActive(false)}>
                <h2 style={{ color: !active ? '#c20114' : null }} >Nacionalidad</h2>
            </div>
        </div>

        { active ? <Players /> : <Country />}
    </div>


  )
}

export default MiApi