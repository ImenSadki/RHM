import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar'; 

const App = () => {
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/employees/list');
            setEmployees(response.data);
        } catch (error) {
            console.error('Erreur lors de la récupération des employés', error);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleEmployeeAdded = (newEmployee) => {
        setEmployees([...employees, newEmployee]);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/employees/delete/${id}`);
            setEmployees(employees.filter((employee) => employee._id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'employé', error);
        }
    };

    const handleEdit = async (employee) => {

        const updatedEmployee = { ...employee, position: 'Nouveau Poste' }; 
        try {
            const response = await axios.put(`http://localhost:5000/api/employees/update/${employee._id}`, updatedEmployee);
            setEmployees(employees.map(emp => (emp._id === employee._id ? response.data : emp)));
        } catch (error) {
            console.error('Erreur lors de la modification de l\'employé', error);
        }
    };

    const handleContact = (employee) => {
        
        alert(`Contacter ${employee.name} à l'email ${employee.email}`);
    };

    return (
        <Router>
            <div>
                <Navbar /> 
                <Routes>
                    <Route path="/" element={
                        <>
                            <EmployeeForm onEmployeeAdded={handleEmployeeAdded} />
                            <EmployeeList 
                                employees={employees} 
                                onDelete={handleDelete} 
                                onEdit={handleEdit} 
                                onContact={handleContact} 
                            />
                        </>
                    } />
                   
                </Routes>
            </div>
        </Router>
    );
};

export default App;
