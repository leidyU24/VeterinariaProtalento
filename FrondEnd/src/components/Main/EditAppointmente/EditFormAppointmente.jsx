import 'bulma/css/bulma.min.css'
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import './EditAppointmente.css'
import useForm from "./useForm";
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { viewOneAppointmente } from '../ViewAppointmente/ViewAppointmente';

export default function EditFormAppointmente() {

    const [id_cita, setItems] = useState([]);
    const [inputs, setDataAppoint] = useState({});

    const [newInputs, setNewDataAppoint] = useState(null);
    function handleChangeEdit(name) {
        return (event)  => setNewDataAppoint({ ...newInputs, [name]: event.target.value });
    }

    useEffect(() => {
        const id_cita = window.localStorage.getItem("id_cita");
        if (id_cita) {
            setItems(id_cita);
        }

        const oneCitas = async () => {
            try {
                const data = await viewOneAppointmente(id_cita);
                setDataAppoint(data[0]);
                setNewDataAppoint(data[0]);
                console.log("Mi cita:", data);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        oneCitas();
    }, []);

    console.log("id: ", id_cita)

    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('')
    
    const navigate = useNavigate();

    const handleSubmit = () => {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(newInputs)
        }
        fetch(`http://localhost:3000/api/v1/appointments/${id_cita}`, requestOptions)
        .then(res => {
            setErrorMessage('')
            navigate('/Citas')
          })
          .catch(error =>{
            setErrorMessage(error.response.data.message)
          })
    };


    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    const cancelData = () => {
        navigate("/Citas")
    }

    return <div className="field">
                <label className="label">Estado de cita</label>
                <div className="control">
                    <div className="select">
                        <select className='input'
                            name='appointments_status'
                            value={newInputs?.appointments_status}
                            onChange={handleChangeEdit('appointments_status')}>
                            <option placeholder="Selecciona un servicio"></option>
                            <option>Abierta</option>
                            <option>Cerrada</option>
                            <option>Cancelada</option>
                        </select>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Nombre del paciente</label>
                    <div>
                        <input className="input" type="text" placeholder="Firulais"
                            id='patient'
                            name='appointments_patient'
                            value={newInputs?.appointments_patient}
                            onChange={handleChangeEdit('appointments_patient')} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Nombre del dueño</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Nombre del los papás"
                            name="appointments_owner"
                            value={newInputs?.appointments_owner}
                            onChange={handleChangeEdit('appointments_owner')} />
                    </div>
                </div>

                <div className="field">
                    <label className="label" >Fecha de la cita</label>
                    <div className="control" >
                        <input className="input" type="datetime-local"
                            name='appointments_date'
                            value={formatDate(newInputs?.appointments_date)}
                            onChange={handleChangeEdit('appointments_date')} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Doctor</label>
                    <div className="control">
                        <div className="select">
                            <select className='input'
                                name='appointments_veterinary'
                                value={newInputs?.appointments_veterinary}
                                onChange={handleChangeEdit('appointments_veterinary')}>
                                <option placeholder="Selecciona un doctor"></option>
                                <option>Julian Gomez</option>
                                <option>Mario Diaz</option>
                                <option>Fernando Garcia</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Tipo de atención</label>
                    <div className="control">
                        <div className="select">
                            <select className='input'
                                name='appointments_type'
                                value={newInputs?.appointments_type}
                                onChange={handleChangeEdit('appointments_type')}>
                                <option placeholder="Selecciona un servicio"></option>
                                <option>Corte</option>
                                <option>Baño</option>
                                <option>Medicina General</option>
                                <option>Odontologia</option>
                                <option>Cirugia</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="control">
                        <button id="cancel" className="button is-link is-light" onClick={cancelData}>Cancel</button>
                    </div>
                    <div>
                        {data ? (
                            <div>
                                <span>{data}</span>
                            </div>
                        ) : null}
                        {!data && (
                            <div>
                                <span>Faltan datos por llenar</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

}
