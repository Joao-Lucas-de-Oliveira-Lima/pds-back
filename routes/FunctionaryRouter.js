const router = require("express").Router()

const Functionary = require("../models/Functionary.js")

router.post("/", async (req, res) => {
    const {cpf, nome, salario, profissoes} = req.body

    const functionary = {
        cpf,
        nome,
        salario,
        profissoes,
    }

    try{
        await Functionary.create(functionary)
        res.send("Deu certo")
    }catch(erro){
        res.json("Deu certo")
    }

})

router.get("/", async (req, res) =>{
    
    try{
        const people = await Functionary.find()
        res.json(people)
    }catch(erro){
    }

})

router.get("/:id", async (req, res) => {
    const id = req.params.id

    try{
        const person = await Functionary.findOne({_id: id})
        res.json(person)
    }catch(erro){
        res.send("erro")
    }

})

router.patch("/:id", async (req, res) => {
    const id = req.params.id
    const {cpf, nome, salario, profissoes} = req.body

    const functionary = {
        cpf,
        nome,
        salario,
        profissoes,
    }
    
    try{
        const updateFunctionary = await Functionary.updateOne({_id: id}, functionary)
        res.json(functionary)
    }catch(erro){
        res.send("erro")
    }
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id

    const person = await Functionary.findOne({_id: id})


    if(!person){
        res.send("Usuário não existe")
        return
    }

    try{
        await Functionary.deleteOne({_id: id})
        res.send("Usuário deletado com sucesso")
    }catch(erro){
        res.send("Erro")
    }

})

module.exports = router