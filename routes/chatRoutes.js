const express = require('express');
const router = express.Router();
const Message = require('../models/Message');


router.post('/send', async (req, res) => {
    const { employeeId, sender, content } = req.body;

    const newMessage = new Message({ employeeId, sender, content });

    try {
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'envoi du message', error: error.message });
    }
});


router.get('/:employeeId', async (req, res) => {
    try {
        const messages = await Message.find({ employeeId: req.params.employeeId });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des messages', error: error.message });
    }
});

module.exports = router;
