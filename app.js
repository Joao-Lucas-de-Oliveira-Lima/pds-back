const express = require("express")
const app = express()
const mongoose = require("mongoose")

const functionaryRouter = require("./routes/FunctionaryRouter.js")

app.use(
    express.urlencoded(
        {extended: true}
    )
)
app.use(express.json())

//Routes
app.use("/Functionary", functionaryRouter)

mongoose  
    .connect("mongodb://localhost:27017/pds")
    .then(() =>{
        console.log("Banco conectado")
        app.listen(3000)
    })
    .catch((erro) => {
        console.log(erro)
    })