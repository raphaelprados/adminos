
const Sequelize = require('sequelize')
const conexao = require('./conexao')

const Marcas = conexao.define('marcas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: Sequelize.STRING
})

Marcas.sync({ force: false })

module.exports = Marcas
