const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;  


app.use(express.json());
app.use(cors());  


const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes);


const MONGO_URI = 'mongodb://localhost:27017/hrmanagement';  // Assure-toi que l'URL est correcte
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie'))
    .catch((err) => console.error('Erreur de connexion à MongoDB:', err));

app.get('/', (req, res) => {
    res.send('L\'API fonctionne');
});


app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
