import { useEffect, useState } from "react";
import '../CardAppointmente/CardAppointmente'
import './EditAppointmente.css'


export default function InsertAppointmente(inputs) {
    const dataInputs = inputs;
    const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
            appointments_patient: dataInputs.patient,
            appointments_owner: dataInputs.owner,
            appointments_date: dataInputs.date,
            appointments_veterinary: dataInputs.doctor,
            appointments_type: dataInputs.type,
            appointments_status: dataInputs.status
        })
    };
    return fetch('http://localhost:3000/api/v1/appointments', requestOptions)
        .then(response => response.json())
        .then(result => result) // Devuelve el resultado directamente
        .catch(error => {
            console.error('Error:', error);
        });
}
