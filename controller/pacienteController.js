const express = require('express');
const upload = require('../upload/upload')
const pacienteModel = require('../model/pacienteModel')
const router = express.Router();

router.post('/paciente/inserir', upload.single('foto'), (req,res)=>{

    console.log('teste');
    // res.send('teste');

    let {nome_paciente, telefone_paciente, celular_paciente, email_paciente,
    nome_responsavel, telefone_responsavel}= req.body;
    let foto = req.file.path;
    console.log(foto);

    pacienteModel.create(
        {   
            nome_paciente, 
            telefone_paciente, 
            celular_paciente, 
            email_paciente,
            foto,
            nome_responsavel,
            telefone_responsavel
        }
    ).then(
        ()=>{
            return res.status(201).json({
            errorStatus:false,
            mensageStatus:'Paciente cadastrado com sucesso'
            });
        }   
    ).catch(
        (error)=>{
            return res.status(500).json({
                errorStatus:true,
                mensageStatus: error
            });
        }
    );
});
module.exports = router;