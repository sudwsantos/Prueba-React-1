import React from 'react'

const Navbar = ({ brand }) => {
  return (
    // Componente generado para no llenar mucho el archivo principal
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container mt-5'>
       <a className='navbar-brand text-uppercase' href='/'>{brand}</a>
      </div>
    </nav>
  )
}

export default Navbar