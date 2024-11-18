import con from "./connection.js";

export async function inserirChamado(chamado){

    const comando = `
    
    insert into chamado (titulo, informacoes, impacto, data_de_ocorrencia, atribuir)
    values(?,?,?,?,?)
    `;
   let resposta = await con.query(comando , [chamado.titulo, chamado.informacoes ,chamado.data,chamado.impacto , chamado.atribuir]);
  let info = resposta[0];

  return info.insertId;

}


export async function consultarChamada(){

    const comando = `
    
    
    select   id_chamada   id,
             titulo    titulo,
             informacoes     informacoes,
             data  data,
             impacto  impacto,
             atribuir atribuir
             
    from  chamado; 
    `
    let resposta = await con.query(comando);
            let registros = resposta[0]
        
            return registros;
    }





    export async function alterarChamado(atribuir){

        const comando = `
        
        
        update chamado
        set   titulo  =  ?,
                 informacoes  =   ?,
                 data = ?,
                 impacto = ?
                 id_clientes = ?
                 atribuir = ?
        where atribuir = ?;
        `
      
        let resposta = await con.query(comando , [chamado.titulo, chamado.informacoes ,chamado.data,chamado.impacto , chamado.atribuir, atribuir]);
        let info = resposta[0];
        return info.insertId;
      
      }
      
      
      export async function deletarChamada(atribuir){
      
        const comando = `
        
        
        delete from chamada
        where atribuir = ?
        `;
      
        let resposta = await con.query(comando , [atribuir]);
        let info = resposta[0];
        return info.insertId;
      
      }