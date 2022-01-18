
const Sequelize = require('sequelize')
const conexao = require('./conexao')

const Cliente = conexao.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement = true
    },
    nome: Sequelize.STRING,
    cidade: Sequelize.STRING,
    endereco: Sequelize.STRING,
    numeroCasa: Sequelize.SMALLINT,
    dataCriacao: Sequelize.DataTypes.DATE,
    telefone: Sequelize.STRING,
    observacoes: Sequelize.TEXT
})

Cliente.sync({ force: false })

module.exports = Cliente
