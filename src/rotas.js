import apiController from "./controller/apiController.js"

export function rotas(servidor){

    servidor.use(apiController);

}


export default rotas;