const Sequelize = require("sequelize")
const sequelize = new Sequelize("aula_ams","root","", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Banco conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const agendamento = sequelize.define("agendamento",{
    nome: {
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.STRING
    }
})

/*agendamento.sync({force: true})

agendamento.create({
    nome: "Ítallo",
    endereco: "Av Aguia de Haia, 2700",
    bairro: "Jd São Nicolau",
    cep: "08245-240",
    cidade: "São Paulo",
    estado: "SP",
    observacao: "nd"
})*/

module.exports = agendamento