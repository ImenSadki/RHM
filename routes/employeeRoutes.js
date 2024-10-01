const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');


router.post('/add', async (req, res) => {
    const { name, email, position, salary } = req.body;

    if (!name || !email || !position || !salary) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    try {
        const newEmployee = new Employee({ name, email, position, salary });
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'employé', error);
        res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'employé', error: error.message });
    }
});

router.get('/list', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des employés', error: error.message });
    }
});


router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, position, salary } = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { name, email, position, salary },
            { new: true }
        );
        res.status(200).json(updatedEmployee);
    } catch (error) {
        console.error('Erreur lors de la modification de l\'employé', error);
        res.status(500).json({ message: 'Erreur lors de la modification de l\'employé', error: error.message });
    }
});


router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await Employee.findByIdAndDelete(id);
        res.status(200).json({ message: 'Employé supprimé avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'employé', error);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'employé', error: error.message });
    }
});

module.exports = router;
