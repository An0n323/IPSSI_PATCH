require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 8000;

// Middlewares
app.use(cors());
app.use(express.json()); // Indispensable pour lire le JSON envoyé par le client

// Montage des routes
app.use('/api', userRoutes);

// Synchronisation de la base de données et démarrage
sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});