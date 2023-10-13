const connection = require("../../knexfile")['development']
const database = require('knex')(connection);

const getAllClients = () => {
    //select * from clients
    return database('clients');
};

const getClient = (idClient) => {
    //select * from clients where id = idClient
    return database('clients')
        .where({ id: idClient });
};

const insetClient = (idClient) => {
    //insert into clients (first_name,...) values('Maria',....)
    return database('clients')
        .insert(idClient);
};

const updateClient = (idClient, Client) => {
    //insert into clients (first_name,...) values('Maria',....)
    return database('clients')
        .where('id','=', idClient)
        .update(client)
};

const deleteClient = (idClient) => {
    //insert into clients (first_name,...) values('Maria',....)
    return database('clients')
        .where('id','=', idClient)
        .del()
};

module.exports = {
    getAllClients,
    getClient,
    insetClient,
    updateClient,
    deleteClient,
}