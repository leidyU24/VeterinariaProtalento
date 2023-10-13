import { useEffect, useState } from "react";
import '../CardAppointmente/CardAppointmente'
import CardAppointmente from "../CardAppointmente/CardAppointmente";
import './ViewAppointmente.css'


async function viewAppointmente() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/appointments', {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        });
        const result_1 = await response.json();
        return result_1;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function viewOneAppointmente(idCita) {
    const response = await fetch('http://localhost:3000/api/v1/appointments/' + idCita, {
        method: "GET",
        headers: { "Content-type": "application/json;charset=UTF-8" }
    });
    const result_1 = await response.json();
    return result_1;
}

async function EditAppointmente() {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
            appointments_patient: "Oro",
            appointments_owner: "Leidy Urrego",
            appointments_date: "01-01-2024",
            appointments_veterinary: "Mario Hernandez",
            appointments_type: "Medicina general",
            appointments_status: "abieto"
        })
    };
    fetch('http://localhost:3000/api/v1/appointments/2', requestOptions)
    const result_1 = await response.json();
    return result_1;
}


export { viewAppointmente, viewOneAppointmente, EditAppointmente }