
const Sequelize = require('sequelize')
const conexao = require('./conexao')
const Aparelho = require('./aparelho')
const Cliente = require('./cliente')

const ordemServico = conexao.define('ordemServico', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataModificacao: Sequelize.DATE,
    dataCriacao: Sequelize.DATE,
    dataEntrada: Sequelize.DATE,
    dataSaida: Sequelize.DATE,
    defeito: Sequelize.TEXT,
    custoPecas: Sequelize.FLOAT,
    custoMaoObra: Sequelize.FLOAT,
    numeroSerie: Sequelize.STRING,
    situacao: Sequelize.STRING,
})

Cliente.hasMany(ordemServico, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})
Aparelho.hasMany(ordemServico, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

ordemServico.belongsTo(Cliente)
ordemServico.belongsTo(Aparelho)

ordemServico.sync({ force: false })

module.exports = ordemServico
