const Sequelize = require('sequelize');

const sequelizeConfig = {
    logging: console.log,
    dialect: 'postgres',
    port: 5432, //mysql 3306
    host: 'localhost',
    pool: 2
};

//database, usuario, senha
const sequelize = new Sequelize('aula', 'postgres', '123456', sequelizeConfig);

module.exports = {sequelize};