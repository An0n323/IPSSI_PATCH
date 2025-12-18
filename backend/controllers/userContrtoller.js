const userService = require('../services/userService');

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.findAllUsers();
    res.json(users); // Renvoie les données en JSON
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};