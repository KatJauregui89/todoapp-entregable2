// importar nuestros modelos creados

const Categories = require('./categories.model');
const TodoCategories = require('./todos-categories.models');
const Todos = require('./todos.model');
const Users = require('./users.model');

const initModels = () => {
    // Categories;
    // TodoCategories;
    // Aqui vamos a crear las relaciones
    // hasOne -> para indicar que tiene uno
    // hasMany -> tiene muchos
    // belongsTo -> pertenece a
    Todos.belongsTo(Users, {as: 'author', foreignKey: 'user_id'});
    Users.hasMany(Todos, {as: 'task', foreignKey: 'user_id'});

    // relación M-M
    TodoCategories.belongsTo(Todos, {as: 'task', foreignKey: 'todo_id'})
    Todos.hasMany(TodoCategories, {as: 'category', foreignKey: 'todo_id'})

    TodoCategories.belongsTo(Categories, {as: 'category', foreignKey: 'category_id'});
    Categories.hasMany(TodoCategories, {as: 'task', foreignKey: 'category_id'})
};

module.exports = initModels;
