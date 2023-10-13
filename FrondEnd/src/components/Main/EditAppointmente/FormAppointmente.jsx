import 'bulma/css/bulma.min.css'
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import './EditAppointmente.css'
import useForm from "./useForm";
import React, { useState } from 'react';

export default function FormAppointmente() {

    const fecha = new Date();

    const { inputs, handleChange, clearForm, insertForm } = useForm({
        patient: "",
        owner: "",
        date: "",  
        doctor: "",
        type: ""
    });

    const [data, setData] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setTimeout(() => {
            insertForm(setData);
            setShowMessage(true); // Supongamos que obtienes datos aquí
            if (!data) {
                clearForm();
            }
            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
        }, 1000);
    };

    return <div >
        <div className="field">
            <label className="label">Nombre del paciente</label>
            <div onChange={handleChange}>
                <input className="input" type="text" placeholder="Firulais"
                    id='patient'
                    name='patient'
                    value={inputs.patient}
                    onChange={handleChange} />
            </div>
        </div>

        <div className="field">
            <label className="label">Nombre del dueño</label>
            <div className="control">
                <input className="input" type="text" placeholder="Nombre del los papás"
                    name="owner"
                    value={inputs.owner}
                    onChange={handleChange} />
            </div>
        </div>

        <div className="field">
            <label className="label" >Fecha de la cita</label>
            <div className="control" >
                <input className="input" data-date-format="YYYY-MM-DD"  type="datetime-local" placeholder={fecha}
                    name='date'
                    value={inputs.date}
                    onChange={handleChange} />
            </div>
        </div>

        <div className="field">
            <label className="label">Doctor</label>
            <div className="control">
                <div className="select">
                    <select className='input'
                        name='doctor'
                        value={inputs.doctor}
                        onChange={handleChange}>
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
                        name='type'
                        value={inputs.type}
                        onChange={handleChange}>
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
                <button className="button is-link" onClick={handleClick}>Submit</button>
            </div>
            <div className="control">
                <button id="cancel" className="button is-link is-light" onClick={clearForm}>Cancel</button>
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
