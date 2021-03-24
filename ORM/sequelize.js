const { Sequelize } = require('sequelize');
const db = require('../config/db.config');

const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: 'postgres',
    logging : false
  });

  async function run() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

  run();
  