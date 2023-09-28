const express = require('express');
const server = express();
const port = 3000;

///Rutas de cada componente
//Rutas del ejemplo
const RoutesEjemplo = require('./routes/ejemplo');
const RoutesAppointments = require('./routes/AppointmentCalendar');

server.use(express.json())

server.use('/api/v1/clients', RoutesEjemplo.ClientsRoutes)

//Rutas del modulo de agendamiento "Leidy Urrego"

server.use('/api/v1/appointments', RoutesAppointments.AppointmentsRoutes)
//Rutas del modulo de informacion de pacientes "José Moreno, Harol García"

//Rutas del modulo de propietarios "sin asignar"

//Rutas del modulo de registro de veterinarios y autenticacion " Leonardo, Robert"

//Rutas del modulo de registro medico de pacientes "sin asignar"




server.listen(port, () => {
console.log(`API escuchando en puerto ${port}.`);
});