import 'bulma/css/bulma.min.css'
import './header.css'
import { Link } from 'react-router-dom';

export default function MiHeader() {

    return <div className="header">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://i.pinimg.com/550x/ed/5f/3a/ed5f3a15d92ba3ac6238a98da42bb01e.jpg" />
                </a>
                
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="home" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" >
                    <Link to="/Home">Home</Link> 
                    </a>

                    <a className="navbar-item">
                    <Link to="/Document">Documentation</Link>
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                            <Link to="/About">About</Link>
                                
                            </a>
                            <a className="navbar-item">
                            <Link to="/Contact">Contact</Link>
                            </a>
                        </div>
                    </div>
                    <a className="navbar-item">
                    <Link to="/Citas">Agenda tu cita</Link>
                    </a>
                </div>
            </div>
        </nav>

    </div>
}