import 'bulma/css/bulma.min.css'
import './CardAppointmente.css'
import { useNavigate } from 'react-router-dom'
import { viewAppointmente } from '../ViewAppointmente/ViewAppointmente';
import { useEffect, useState } from "react";

export default function CardAppointmente() {

    const [citas, setData] = useState([]);

    const [citaSelect, setCitaSelect] = useState([]);

    const navigate = useNavigate();
    const handleClick = (id) => {
        console.log("mi id", id)
        window.localStorage.setItem("id_cita", id)
        navigate("/Editar")
    }

    useEffect(() => {
        const fetchCitas = async () => {
          try {
            const data = await viewAppointmente();
            setData(data);
            console.log("Mis citas:", data);
          } catch (error) {
            console.error("Error:", error);
          }
        };
    
        fetchCitas();
      }, []);

    return <div className='cardGobal'>
        {citas && citas.map((cita) => (
            <div key={cita.id_appointments}>
                <div className="card cardajust">
                    <header className="card-header">
                        <p className="card-header-title">
                            Estado de la Cita: {cita.appointments_status}
                        </p>
                        <button className="card-header-icon" aria-label="more options">
                            <span className="icon">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <p><b>Nombre del paciente:</b> {cita.appointments_patient}</p>
                            <p><b>Dueño del paciente:</b> {cita.appointments_owner}</p>
                            <time dateTime="2016-1-1"><b>Fecha de la cita:</b> {cita.appointments_date}</time>
                            <br />
                            <br />
                            <p><b>Veterinario:</b> {cita.appointments_veterinary}</p>
                            <p><b>Tipo de cita:</b> {cita.appointments_type}</p>
                            <p><b>Fecha Creación:</b> {cita.created_at}</p>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item" id={cita.id_appointments} onClick={()=>{handleClick(cita.id_appointments)}} >Edit</a>
                    </footer>
                </div>
            </div>
        ))}
    </div>
}