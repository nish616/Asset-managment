const {sequelize} = require('../ORM/sequelize');
const {DataTypes} = require('sequelize');

const Employee = sequelize.define( 'Employee',{
  name : {
    type : DataTypes.STRING,
    allowNull : false
  },
  age : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  position : {
    type : DataTypes.STRING,
    allowNull : false
  },
  status : {
    type : DataTypes.STRING,
    allowNull : false
  }
});

module.exports = Employee;