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
    const { id_Animal, id_owner, some_time, id_doctor, id_especialis, active } = req.body

    if (id_Animal !== '' && id_owner !== '') {
        appointmentModel
            .insetAppointment({ id_Animal, id_owner, some_time, id_doctor, id_especialis, active })
            .then(results => res.status(201).json({ message: "Appointmente agregado exitosamente" }))
            .catch(error => res.status(500).json(error));
    }
    else {
        res.status(400).send({ message: 'Nombre invalido' })
    }
};

const updateAppointment = (req, res) => {
    const { id } = req.params
    const {id_Animal, id_owner, some_time, id_doctor, id_especialis, active  } = req.body
    if (id_Animal !== '' && id_owner !== '') {
        appointmentModel
            .updateAppointment(id, { id_Animal, id_owner, some_time, id_doctor, id_especialis, active  })
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