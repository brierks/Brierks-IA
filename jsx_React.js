import React, { useState } from 'react';
import './App.css';

import Encabezado from './components/Encabezado';
import Seccion_de_heroes from './components/Seccion_de_heroes'; // Corregido el nombre del componente
import Servicios from './components/Servicios';
import Juegos_destacados from './components/Juegos_destacados';
import Testimonios from './components/Testimonios';
import Pie_de_pagina from './components/Pie_de_pagina_';
function moverInicio() {
    var inicioSection = document.getElementById("Inicio");
    inicioSection.scrollIntoView({ behavior: 'smooth' });
}

function moverServicios() {
    var serviciosSection = document.getElementById("Servicios");
    serviciosSection.scrollIntoView({ behavior: 'smooth' });
}

function moverJuegosDestacados() {
    var juegosDestacadosSection = document.getElementById("Juegos_destacados");
    juegosDestacadosSection.scrollIntoView({ behavior: 'smooth' });
}

function moverTestimonios() {
    var testimoniosSection = document.getElementById("Testimonios");
    testimoniosSection.scrollIntoView({ behavior: 'smooth' });
}

function moverContacto() {
    var contactoSection = document.getElementById("Contacto");
    contactoSection.scrollIntoView({ behavior: 'smooth' });
}



function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const handleSignupClick = () => {
    setShowLoginForm(false);
    setShowSignupForm(true);
  };

  const handleSlayerSectionClick = () => {
    smoothScrollTo(document.getElementById('Slayer').offsetTop, 1000);
  };

  $(document).ready(function() {
  $('.slayer-carousel').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1
  });
});


  const smoothScrollTo = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = easeInOutCubic(elapsedTime, startPosition, distance, duration);

      window.scrollTo(0, progress);

      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <div className="App">
      <logo />
      <Encabezado />
      <Seccion_de_heroes onClick={handleSlayerSectionClick} /> {/* Agregado el evento onClick */}
      <Servicios />
      <Juegos_destacados />
      <Testimonios />
      <Pie_de_pagina />
      <div className="login-buttons">
        <button id="login-btn" onClick={handleLoginClick}>Iniciar Sesión</button>
        <button id="signup-btn" onClick={handleSignupClick}>Registrarse</button>
      </div>
      {showLoginForm && (
        <div id="login-form">
          {/* Código para el formulario de inicio de sesión */}
          <h2>Inicio de Sesión</h2>
          <form>
            {/* Campos del formulario */}
            <input type="text" placeholder="Nombre de usuario" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Iniciar Sesión</button>
          </form>
        </div>
      )}
      {showSignupForm && (
        <div id="signup-form">
          {/* Código para el formulario de registro */}
          <h2>Registro</h2>
          <form>
            {/* Campos del formulario */}
            <input type="text" placeholder="Nombre de usuario" />
            <input type="email" placeholder="Correo electrónico" />
            <input type="password" placeholder="Contraseña" />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
