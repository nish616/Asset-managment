const {sequelize} = require('./sequelize');

//require models
require('../models/employee');

const init = async () => {
    try{
        await sequelize.sync();
    }
    catch(err){
        throw err;
    }
    
}

module.exports = init;