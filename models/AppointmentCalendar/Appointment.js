const connection = require("../../knexfile")['development']
const database = require('knex')(connection);

const getAllAppointment = () => {
    //select * from clients
    return database('appointments');
};

const getAppointment = (id) => {
    //select * from clients where id = idClient
    return database('appointments')
        .where({ id: idAppointments });
};

const insetAppointment = (id) => {
    //insert into clients (first_name,...) values('Maria',....)
    return database('appointments')
        .insert(id);
};

const updateAppointment = (id, Appointments) => {
    //insert into clients (first_name,...) values('Maria',....)
    return database('appointments')
        .where('id_factura','=', id)
        .update(Appointments)
};


module.exports = {
    getAllAppointment,
    getAppointment,
    insetAppointment,
    updateAppointment,

}