
const express = require('express')
const bcrypt = require('bcryptjs')
const sequelize = require('sequelize')
const session = require('express-session')

const app = express()

app.use(express.static('public')) //Definindo a pasta dos arquivos estaticos
app.use(express.urlencoded({ extended: false })) 
app.set('view engine', 'ejs')
app.use(session({ secret: "Um%55kjds", resave: true, saveUninitialized: true }))

// Rotinas de Acesso a páginas

app.get('/', function(req, res) {
    res.render("index")
})

app.get('/aparelho/cadastro', function(req, res) {
    
})

app.listen(3000)
