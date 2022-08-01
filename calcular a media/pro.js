//Var - Global
//Let - Local
// --- OPERADORES DE COMPARACAO ---
// == COMPARACAO DE TESTE LOGICO
// != DIFERENCA DE TESTE LOGICO
// < MENOR
// > MAIOR
// <= MENOR IGUAL
// >= MAIOR IGUAL
// --- OPERADORES LOGICOS ---
// E        &&          AND
// OU       ||          OR
// NEGACAO  !           NOT

console.log('--- EXERCICIO PARA CALCULAR A MEDIA ---\n')
     //import da biblioteca readline (interacao com usuario)
var readline = require('readline')
    //instancia o objeto para criar a interface com o usuario
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//ENTRADA DO NOME DO ALUNO
entradaDados.question('Informe seu usuario: \n', function (usuario){ 
    //Declaracao de variavel local (let) e atribuindo um valor
    let usuarioPessoa = usuario
    console.log('Bem-vindo, ' +usuarioPessoa+ '!\n')
    //ENTRADA DA NOTA 1
    entradaDados.question('Entrar com valor da nota 1: \n', function(valor1){
        let nota1 = valor1
                    
        //ENTRADA DA NOTA 2
        entradaDados.question('Entrar com o valor da nota 2: \n', function(valor2){
            let nota2 = valor2
                    
            //ENTRADA DA NOTA 3
            entradaDados.question('Entrar com o valor da nota 3: \n', function(valor3){
                let nota3 = valor3
                    
                //ENTRADA DA NOTA 4
                entradaDados.question('Entrar com o valor da nota 4: \n', function(valor4){
                    let nota4 = valor4
                    let media
                    
                    //VALIDACAO PARA O USUARIO
                    if(usuarioPessoa == ''){
                        console.log('Usuario deve ser informado.')        
                        //VALIDACAO PARA AS NOTAS
                    }
                    else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('E necessario informar todas as notas para o calculo')
                    }
                    else{
                        media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) /4
                        console.log('A media do usuario '+usuario+' eh de: ' + media)                        
                    }
                    if (media > 7.0) {
                        console.log('O usuario foi aprovado!')
                    }
                    else if (4.0 < media > 6.9) {
                        console.log('O usuario esta em exame')
                    }
                    else{
                        console.log('O usuario foi reprovado')
                         //FECHA O OBJETO
                        entradaDados.close()             
                   
                    }
                })
            })
        })
    })
})