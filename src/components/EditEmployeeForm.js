import React, { useState } from 'react';
import axios from 'axios';

const EditEmployeeForm = ({ employee, onUpdate, onCancel }) => {
    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [position, setPosition] = useState(employee.position);
    const [salary, setSalary] = useState(employee.salary);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/employees/update/${employee._id}`, {
                name,
                email,
                position,
                salary,
            });
            onUpdate(response.data);
        } catch (error) {
            console.error('Erreur lors de la mise à jour de l\'employé', error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>Modifier l'Employé</h2>
            <form onSubmit={handleSubmit}>
               
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="position" className="form-label">Poste</label>
                    <input type="text" className="form-control" id="position" value={position} onChange={(e) => setPosition(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salaire</label>
                    <input type="number" className="form-control" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Mettre à jour l'Employé</button>
                <button type="button" className="btn btn-secondary" onClick={onCancel}>Annuler</button>
            </form>
        </div>
    );
};

export default EditEmployeeForm;
