import { useEffect, useState } from "react";
import '../CardAppointmente/CardAppointmente'
import CardAppointmente from "../CardAppointmente/CardAppointmente";
import './EditAppointmente.css'


export default function EditAppointmente() {

    const [editCitas, setEditCitas] = useState([]);

        useEffect(() => {
            const requestOptions = {
                method: "PUT",
                headers: { "Content-type": "application/json;charset=UTF-8" },
                body: JSON.stringify({
                    appointments_patient:"Oro",
                    appointments_owner:"Leidy Urrego",
                    appointments_date:"01-01-2024",
                    appointments_veterinary:"Mario Hernandez",
                    appointments_type:"Medicina general",
                    appointments_status:"abieto"
                })
            };
            fetch('http://localhost:3000/api/v1/appointments/2',requestOptions)
                .then(response => response.json())
                .then((editCitas) => 
                    console.log("mi edit fetch", editCitas)
                );
        });
    }

