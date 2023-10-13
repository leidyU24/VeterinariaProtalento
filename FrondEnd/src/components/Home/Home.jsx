import React from 'react';
import 'bulma/css/bulma.min.css'

function Home() {
    return (
      <div>
        <section className="hero is-primary is-bold is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Bienvenido a la Clínica Veterinaria</h1>
              <h2 className="subtitle">¡Cuidando de tus mascotas!</h2>
            </div>
          </div>
        </section>
  
        <section className="section">
          <div className="container">
            <h2 className="title">Nuestros Servicios</h2>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <div className="box">
                  <h3 className="title is-4">Consulta Veterinaria</h3>
                  <p>Ofrecemos consultas veterinarias para mantener a tus mascotas saludables.</p>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="box">
                  <h3 className="title is-4">Vacunaciones</h3>
                  <p>Protege a tus mascotas contra enfermedades con nuestras vacunas.</p>
                </div>
              </div>
              <div className="column is-one-third">
                <div className="box">
                  <h3 className="title is-4">Cirugía Veterinaria</h3>
                  <p>Realizamos cirugías y procedimientos médicos para tus mascotas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <footer className="footer">
          <div className="content has-text-centered">
            <p>&copy; 2023 Clínica Veterinaria. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    );
  }

export default Home;
