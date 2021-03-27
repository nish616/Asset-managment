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
    allowNull : false
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
  adminId : {
    type : DataTypes.INTEGER,
    allowNull : false
  }
});

module.exports = Asset;