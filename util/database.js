const Sequeilize = require('sequelize');
const sequelize = new Sequeilize('bookingData', 'root', 'sonysony@abc',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;