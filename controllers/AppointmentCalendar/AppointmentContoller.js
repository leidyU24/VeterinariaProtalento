const appointmentModel = require('../../models/AppointmentCalendar/Appointment');

const getAppointments = (req, res) => {
    appointmentModel
        .getAllAppointment()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getAppointment = (req, res) => {
    const { id } = req.params
    appointmentModel
        .getAppointment(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error))
};

const insetAppointment = (req, res) => {
    const { appointments_date, appointments_type, appointments_status} = req.body

    if (appointments_date !== '' && appointments_type !== '') {
        appointmentModel
            .insetAppointment({appointments_date, appointments_type, appointments_status })
            .then(results => res.status(201).json({ message: "Appointmente agregado exitosamente" }))
            .catch(error => res.status(500).json(error));
    }
    else {
        res.status(400).send({ message: 'Nombre invalido' })
    }
};

const updateAppointment = (req, res) => {
    const { id } = req.params
    const {appointments_date, appointments_type, appointments_status  } = req.body
    if (appointments_date !== '' && appointments_type !== '') {
        appointmentModel
            .updateAppointment(id, { appointments_date, appointments_type, appointments_status  })
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json({ message: 'Error al actualizar' }))
    } else {
        res.status(400).send({ message: 'Nombre invalido' })
    }
};


module.exports = {
    getAppointments,
    getAppointment,
    insetAppointment,
    updateAppointment,
};