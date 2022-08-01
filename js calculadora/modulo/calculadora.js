/*************************************************************
 * 
 * Objetivo:        arquivo que contem  todas as funcoes para calculos matematicos
 * autor:           lucas camilo
 * Data Criacao:    01/08/2022
 * versao:          1.0
 * 
 **************************************************************/



function calcular(valor1, valor2, opcaoCalculo)
 {

    //Criando variaveis locais para receber o conteudo dos argumentos
    //que foram encaminhados na function

    let numero1 = valor1;
    let numero2 = valor2;
    let operacao = opcaoCalculo.toUpperCase();
    let resultado;
    let erro = false;

    // isNaN () -- funcao para validar se o conteudo de uma variavel eh numero ou nao
    if(isNaN (numero1) || isNaN (numero2))
    {
        console.log('ERRO: Apenas numeros inteiros ou reais sao aceitos');
        erro = true;
    }else
    {

    if(operacao == 'SOMAR' || operacao == '+'){
        
        resultado = numero1 + numero2;
    }else if (operacao == 'SUBTRAIR' || operacao == '-'){
        
        resultado = numero1 - numero2;
    }else if (operacao == 'MULTIPLICAR' || operacao == '*'){
        
        resultado = numero1 * numero2;
    }else if (operacao == 'DIVIDIR' || operacao == '/'){
        
        resultado = numero1 / numero2;
    }else
    {
        console.log('ERRO: operacao invalida'); 
        erro = true;
    }
    }
    
    if(erro){
    return false;   
    }else{
        return resultado;
    }                                                                                                                                                                                                                                                                                                                                  
 }