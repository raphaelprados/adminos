
const Sequelize = require('sequelize')
const conexao = require('./conexao')

const TiposAparelhos = conexao.define('tiposaparelhos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: Sequelize.STRING
})

TiposAparelhos.sync({ force: false })

module.exports = TiposAparelhos
