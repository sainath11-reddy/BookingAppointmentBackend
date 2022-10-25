const Sequeilize = require('sequelize');
const sequelize = require('../util/database');

const BookingInfo = sequelize.define('bookingInfo',{
    id:{
        type:Sequeilize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
    email:{
        type:Sequeilize.STRING,
        allowNull:false,
        unique:true
    },
    name:{
        type:Sequeilize.STRING,
        allowNull:false,
        unique:true
    }
})

module.exports = BookingInfo;