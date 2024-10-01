import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaUsers, FaChartBar, FaBookOpen } from 'react-icons/fa'; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Gestion des Ressources Humaines</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <FaUsers className="me-2" /> Liste des Employés
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/statistiques">
                                <FaChartBar className="me-2" /> Statistiques
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/programmes">
                                <FaBookOpen className="me-2" /> Programmes de Formation
                            </Link>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
