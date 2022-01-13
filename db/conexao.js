
const Sequelize = require('sequelize')

//Sequelize(dbname, user_name, user_password)
const conexao = new Sequelize('adminosdb', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    timezone: '-04:00'
})

module.exports = conexao
