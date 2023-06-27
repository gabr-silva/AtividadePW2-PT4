const express = require ('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//criação da rota do paciente
const pacienteController = require('./controller/pacienteController');
app.use('/', pacienteController);


app.listen(3000, ()=>{
    console.log('Servidor rodando em: http://localhost:3000');
})