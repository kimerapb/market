import React from 'react'
import { CartWidget } from './CartWidget';
import logo_bike from '../media/logo.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/"><div className="navbar-brand"><img src={logo_bike}  alt="logo" ></img></div></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/categoria/ruta">Carreras</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/categoria/montaña">Montaña</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/categoria/triatlón">Triatlón</Link>
        </li>
      </ul>
      <span className="navbar-text">

      <CartWidget/>
        
      </span>
    </div>
  </div>
</nav>

    </>

  )
}

export default NavBar