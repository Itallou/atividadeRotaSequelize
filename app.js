const express = require("express")
const app = express()
const agendamento = require("./banco")

app.listen(8081,function(){
    console.log("Conexão realizada com sucesso!")
})

app.get("/",function(req,res){
    res.send("Página Principal")
})

app.get("/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:observacao",function(req,res){
    agendamento.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cep: req.params.cep,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao
    })
    res.send("Dados cadastrados com sucesso!")
})