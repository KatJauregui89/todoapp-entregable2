const {Sequelize} = require('sequelize')

// crear una instancia con parametros de configuración de nuestra base de datos
// un objeto de configuración -> credenciales de mi base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost", // 127.0.0.1
    port: "5433",
    password: "root",
    dialect: "postgres" // la base de datos que estamos usando
});

module.exports = db;