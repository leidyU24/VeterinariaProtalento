import React from 'react';
import 'bulma/css/bulma.min.css'

function Document() {
    return (
      <div className="container">
        <h1 className="title">Cuidado de Mascotas</h1>
        <div className="content">
          <h2 className="subtitle">Consejos para el cuidado de tus mascotas</h2>
          <ul>
            <li>
              <strong>Alimentación:</strong> Proporciona una dieta balanceada y de alta calidad a tu mascota.
            </li>
            <li>
              <strong>Ejercicio:</strong> Asegúrate de que tu mascota haga ejercicio regularmente para mantenerse activa y saludable.
            </li>
            <li>
              <strong>Higiene:</strong> Mantén a tu mascota limpia y cuida su higiene, incluyendo baños y cepillado.
            </li>
            <li>
              <strong>Vacunación:</strong> Mantén al día las vacunas y tratamientos preventivos de tu mascota.
            </li>
            <li>
              <strong>Cuidado veterinario:</strong> Programa chequeos regulares con un veterinario para asegurar la salud de tu mascota.
            </li>
          </ul>
        </div>
      </div>
    );
  }

export default Document;
