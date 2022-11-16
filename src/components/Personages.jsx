import React from 'react'


const Personages = ({ personages = [] }) => {

  return (
    <div className='row'>
      {personages.map((item, index) => (
        <div key={index} className='col mb-4'>
          <div className="card" style={{minWidth: "150px"}}>
             <img src={item.image} alt='Personages de Rick y Morty' />
              <div className='card-body'>
                <h5 className='card-title'>{item.name}</h5>
                <hr />
                <p>Species: {item.species}</p>
                <p>Location: {item.location.name}</p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Personages;