import React, { useState } from 'react';
import EditEmployeeForm from './EditEmployeeForm';
import Chat from './Chat.js';

const EmployeeList = ({ employees, onDelete }) => {
    const [editingEmployee, setEditingEmployee] = useState(null);
    const [chatEmployee, setChatEmployee] = useState(null);

    const handleUpdate = (updatedEmployee) => {
        setEditingEmployee(null);
     
    };

    return (
        <div className="container mt-4">
            <h2>Liste des Employés</h2>
            {editingEmployee ? (
                <EditEmployeeForm
                    employee={editingEmployee}
                    onUpdate={handleUpdate}
                    onCancel={() => setEditingEmployee(null)}
                />
            ) : chatEmployee ? (
                <Chat employee={chatEmployee} onClose={() => setChatEmployee(null)} />
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Poste</th>
                            <th scope="col">Salaire</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee.name}</td>
                                <td>{employee.position}</td>
                                <td>{employee.salary}€</td>
                                <td>
                                    <button onClick={() => setEditingEmployee(employee)} className="btn btn-warning">Modifier</button>
                                    <button onClick={() => setChatEmployee(employee)} className="btn btn-info">Contacter</button>
                                    <button onClick={() => onDelete(employee._id)} className="btn btn-danger">Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default EmployeeList;
