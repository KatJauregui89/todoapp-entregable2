const db = require('../utils/database');
const Users = require('../models/users.model');
const Todos = require('../models/todos.model');



const users = [
    {username: 'Katia', email: 'katia@gmail.com', password: '1234'}, // id:1
    {username: 'Lucero', email: 'lucero@gmail.com', password: '1234'}, // id:2
    {username: 'Diego', email: 'diego@gmail.com', password: '1234'}, // id:3
];

const todos = [
    {title: 'Tarea 1', descripcion: 'Descripcion para 1', userId: 1},
    {title: 'Tarea 2', descripcion: 'Descripcion para 2', userId: 1},
    {title: 'Dormir', descripcion: 'description', userId: 2},
    {title: 'Tarea imposible', descripcion: 'Descripcion para 3', userId: 2}
];

//const categories = [];

//const todosCategories = [];

//METODOS:
// create
// findOne, findAll (select * from), findByPk (encontrar por Pk)
// update
// destroy

db.sync({force: true})
    .then(() => {
        console.log('Iniciando con el sembradio');
        users.forEach((user) => Users.create(user)); // es como INSERT INTO users
        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        }, 100)
    })
    .catch((error) => console.log(error));