const clientModel = require('../../models/ejemplo/Client');

const getClients = (req, res) => {
    clientModel
        .getAllClients()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getClient = (req, res) => {
    const { id } = req.params
    clientModel
        .getClient(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error))
};

const insetClient = (req, res) => {
    const { first_name, last_name, active } = req.body

    if (first_name !== '' && last_name !== '') {
        clientModel
            .insetClient({ first_name, last_name, active })
            .then(results => res.status(201).json({ message: "Cliente agregado exitosamente" }))
            .catch(error => res.status(500).json(error));
    }
    else {
        res.status(400).send({ message: 'Nombre invalido' })
    }
};

const updateClient = (req, res) => {
    const { id } = req.params
    const { first_name, last_name, active } = req.body
    if (first_name !== '' && last_name !== '') {
        clientModel
            .updateClient(id, { first_name, last_name, active })
            .then(results => res.status(201).json(results))
            .catch(error => res.status(500).json({ message: 'Usuario actualizado exitosamente' }))
    } else {
        res.status(400).send({ message: 'Nombre invalido' })
    }
};

const deleteClient = (req, res) => {
    const { id } = req.params

    clientModel
        .deleteClient(id)
        .then(results => res.status(201).json({
            message: 'Cliente eliminado exitosamente'
        }))
        .catch(error => res.status(500).json(error));
};

const insertClients = (req, res) => res.status(200).send({
    message: "Clients"
});


module.exports = {
    getClients,
    getClient,
    insetClient,
    updateClient,
    deleteClient,
};