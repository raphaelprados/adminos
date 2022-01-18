
const Sequelize = require('sequelize')
const conexao = require('./conexao')
const Marca = require('./marca')
const TipoAparelho = require('./tipoAparelho')

const Aparelhos = conexao.define('aparelhos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement = true
    },
    modelo: Sequelize.STRING
})

Marca.hasMany(Aparelhos, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})
TipoAparelho.hasMany(Aparelhos, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Aparelhos.belongsTo(Marca)
Aparelhos.belongsTo(TipoAparelho)

Aparelhos.sync({ force: false })

module.exports = Aparelhos
