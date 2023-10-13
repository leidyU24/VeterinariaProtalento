import 'bulma/css/bulma.min.css'
import './MenuAppointmente.css'
import { useState } from 'react';
import FormAppointmente from '../EditAppointmente/FormAppointmente';
import InsertAppointmente from '../EditAppointmente/InsertAppointmente';
import EditFormAppointmente from '../EditAppointmente/EditFormAppointmente';
import CardAppointmente from '../CardAppointmente/CardAppointmente';

export default function MenuAppointmente() {

    const [isActiveOne, setIsActiveOne] = useState(true);
    const [isActiveTwo, setIsActiveTwo] = useState(false);

    const handleClick = () => {
        if (isActiveOne == true) {
            setIsActiveTwo(current => !current);
            setIsActiveOne(current => !current);
        }
        else if (isActiveTwo == true) {
            setIsActiveOne(current => !current);
            setIsActiveTwo(current => !current);
        }

    }

    return <div className="tabs is-boxed card">
        <ul>
            <li className={isActiveOne ? 'is-active' : ''} onClick={handleClick}>
                <a >
                    <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
                    <span>Agendar</span>
                </a>

            </li>
            <li id='a' className={isActiveTwo ? 'is-active' : ''} onClick={handleClick}>
                <a>
                    <span className="icon is-small"><i className="fas fa-music" aria-hidden="true"></i></span>
                    <span>Consultar Citas</span>
                </a>
            </li>
        </ul>
        <div >
            {isActiveOne ? null : <CardAppointmente />}
        </div>
        <div>
            {isActiveTwo ? null : <FormAppointmente/>}
        </div>        
    </div>
}