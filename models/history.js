const {sequelize} = require('../ORM/sequelize');
const {DataTypes} = require('sequelize');

const History = sequelize.define( 'History',{
  type : {
    type : DataTypes.STRING,
    allowNull : false
  },
  assetId : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  cost : {
    type : DataTypes.INTEGER,
    allowNull : true
  },
  employee : {
    type : DataTypes.JSONB,
    allowNull : true
  },
  auditLog : {
    type : DataTypes.JSONB,
    allowNull : true
  },
  details : {
    type : DataTypes.JSONB,
    allowNull : true
  }
});

module.exports = History;