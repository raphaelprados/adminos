
const express = require('express')
const bcrypt = require('bcryptjs')
const sequelize = require('sequelize')
const session = require('express-session')

// Conexao com o banco de dados
const conexao = require('./db/conexao')
const Aparelhos = require('./db/aparelho')
const Clientes = require('./db/cliente')
const Marcas = require('./db/marca')
const TiposAparelhos = require('./db/tipoAparelho')

const app = express()

app.use(express.static('public')) //Definindo a pasta dos arquivos estaticos
app.use(express.urlencoded({ extended: false })) 
app.set('view engine', 'ejs')
app.use(session({ secret: "Um%55kjds", resave: true, saveUninitialized: true }))

// Estabelecendo conexao com o banco de dados
conexao.authenticate() 

// Rotinas de Acesso a páginas

app.get('/', function(req, res) {
    res.render("index")
})

// Objetos utilizados constantemente

let cliente = {
    cpf: "",
    nome: "",
    cidade: "",
    bairro: "",
    rua: "",
    numeroCasa: null,
    complemento: "",
    dataCriacao: null,
    telefone: "",
    observacoes: ""
}

// --------------------------- Páginas de Clientes ---------------------------

// Requisição do acesso à página de listagem de clientes
app.get('/clientes/lista/:mensagem?', function(req, res) {
    Clientes
        .findAll({ order: ["nome"] })
        .then(function(clientes) {
            res.render("cliente/lista", {clientes: clientes })
        })
})

// Renderiza a página de gerenciamento de cliente
app.get('/cliente/novo', function(req, res) {
    res.render('clientes/gerenciador', {mensagem: ""})
})

app.post("/cliente/salvar", function(req, res) {
    cliente.cpf = req.body.cpf,
    cliente.nome = req.body.nomeCompleto
    cliente.cidade = req.body.cidade
    cliente.bairro = req.body.bairro
    cliente.rua = req.body.rua
    cliente.numeroCasa = req.body.numero
    cliente.complemento = req.body.complemento
    cliente.observacoes = req.body.observacoes
})

// Requisição de acesso à página de listagem de aparelhos
app.get('/aparelho/lista', function(req, res) {
    Aparelhos
        .findAll({ order: ["modelo"] })
        .then(function(aparelhos) {
            res.render("aparelhos/lista", {aparelhos: aparelhos })
        })
})

// Renderiza a página de gerenciamento de aparelhos
app.get('/aparelho/novo', function(req, res) {
    res.render('aparelhos/gerenciador', {mensagem: ""})
})

// Requisição de acesso à página de listagem de marcas
app.get('/marca/lista', function(req, res) {
    Marcas
        .findAll({ order: ["nome"] })
        .then(function(marcas) {
            res.render("marcas/lista", {marcas: marcas})
        })
})

// Renderiza a página de gerenciamento de marcas
app.get('/marca/novo', function(req, res) {
    res.render('marcas/gerenciador', {mensagem: ""})
})

// Requisição de acesso à página de listagem de tipos de aparelhos
app.get('/tipo/lista', function(req, res) {
    TiposAparelhos
        .findAll({ order: ["nome"] })
        .then(function(tiposAparelhos) {
            res.render("tipos/lista", {tipos: tipos})
        })
})

// Renderiza a página de gerenciamento de tipos de aparelhos
app.get('/tipo/novo', function(req, res) {
    res.render('tipos/gerenciador', {mensagem: ""})
})

app.listen(3000)
