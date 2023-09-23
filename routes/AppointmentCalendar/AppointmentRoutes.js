const express = require('express');
const router = express.Router();
const { AppointmentsController } = require('../../controllers/AppointmentCalendar');

router.get('/',AppointmentsController.getAppointments);
router.post('/',AppointmentsController.insetAppointment);
router.put('/:id',AppointmentsController.updateAppointment);
router.get('/:id',AppointmentsController.getAppointment);


module.exports = router