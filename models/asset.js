const {sequelize} = require('../ORM/sequelize');
const {DataTypes} = require('sequelize');

const Asset = sequelize.define( 'Asset',{
  name : {
    type : DataTypes.STRING,
    allowNull : false
  },
  category : {
    type : DataTypes.STRING,
    allowNull : false
  },
  make : {
    type : DataTypes.STRING,
    allowNull : false
  },
  model : {
    type : DataTypes.STRING,
    allowNull : true
  },
  serialNumber : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  purchaseValue : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  status : {
    type : DataTypes.STRING,
    allowNull : false
  },
  branch : {
    type : DataTypes.STRING,
    allowNull : false
  },
  employeeId : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  auditLog : {
    type : DataTypes.JSONB,
    allowNull : true
  },
  notes : {
    type : DataTypes.TEXT,
    allowNull : true
  }
});

module.exports = Asset;