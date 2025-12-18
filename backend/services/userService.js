const axios = require('axios');
const User = require('../models/User');

exports.populateRandomUsers = async () => {
  const responses = await Promise.all([1, 2, 3].map(() => axios.get('https://randomuser.me/api/')));
  const usersData = responses.map(r => ({
    name: `${r.data.results[0].name.first} ${r.data.results[0].name.last}`,
    password: r.data.results[0].login.password
  }));
  
  // Utilisation de l'ORM pour une insertion sécurisée
  return await User.bulkCreate(usersData);
};

exports.getAllUsers = async () => {
  return await User.findAll({ attributes: ['id', 'name'] }); // On ne renvoie JAMAIS les mots de passe
};