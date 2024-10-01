import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = ({ onEmployeeAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/employees/add', {
                name,
                email,
                position,
                salary: Number(salary),
            });
            onEmployeeAdded(response.data);
           
            setName('');
            setEmail('');
            setPosition('');
            setSalary('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'employé', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Ajouter un Employé</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Nom" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">Poste</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="position" 
                        placeholder="Poste" 
                        value={position} 
                        onChange={(e) => setPosition(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salaire</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="salary" 
                        placeholder="Salaire" 
                        value={salary} 
                        onChange={(e) => setSalary(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ajouter Employé</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
