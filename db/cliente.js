
const Sequelize = require('sequelize')
const conexao = require('./conexao')

const Cliente = conexao.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cpf: Sequelize.STRING,
    nome: Sequelize.STRING,
    cidade: Sequelize.STRING,
    bairro: Sequelize.STRING,
    rua: Sequelize.STRING,
    numeroCasa: Sequelize.SMALLINT,
    complemento: Sequelize.TEXT,
    dataCriacao: Sequelize.DataTypes.DATE,
    telefone: Sequelize.STRING,
    observacoes: Sequelize.TEXT
})

Cliente.sync({ force: false })

module.exports = Cliente
