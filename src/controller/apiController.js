import { Router } from "express";
import { alterarChamado, consultarChamada, deletarChamada, inserirChamado } from "../repository/apiRepository.js";



const endpoints = Router();

endpoints.get('/chamadoConsultar', async (req, resp) =>{
    try {
       
        let registros = await consultarChamada();
        resp.send({
             Consultar: registros
        } );

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    })



endpoints.post('/chamadoInserir' ,async (req, resp) =>{
        try {
             let atribuir = req.body;
        let numero = await inserirChamado(chamado);
    
        resp.send(
            {
                novoID:numero
            }
        );
    
        } catch (err) {
            resp.status(400).send({
                erro: err.message
            })
        }
   
       
    })




endpoints.put('chamadaAlterar/:atribuir' ,async (req, resp) =>{
    
    try {
        let atribuir = req.params.atribuir;
        let c = req.body;
    

        let linhasAfetadas = await alterarChamado(atribuir, c);
         
        if(linhasAfetadas >= 1){
         resp.send();

        }
        resp.send({
            Alterar:telefone
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    })

    
    endpoints.delete('/chamadaDeletar/:atribuir' ,async (req, resp) =>{
    
        try {
    
            let atribuir = req.params.chamada
            let linhasAfetadas = await deletarChamada(chamada);
         
        if(linhasAfetadas >= 1){
         resp.send();

        }
        

        resp.send({
            deletar:atribuir
        })
        } catch (err) {
            
            resp.status(400).send({
                erro: err.message
        })
        
        }})




export default endpoints;