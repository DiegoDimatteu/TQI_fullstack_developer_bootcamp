function novaOperacao (){
    let opcao = prompt('Deseja fazer uma nova operação:\n1 - Sim\n2 - Não');
    if(opcao == 1){
        calculadora();
    }
    else if(opcao == 2) {
        alert('Até a próxima!');
    }
    else{
        alert('Digite um VALOR válido!!!!');
        novaOperacao();
    }
}


function calculadora (operacao, a, b) {
    operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão Real(/)\n5 - Resto da Divisão (%)\n6 - Divisão Inteira\n7 - Potenciação (**)\n'));
    
    if(operacao > 7){
        alert('Operação inválida!!!');
        calculadora();
    }

    a = Number(prompt('Digite o primeiro valor: '));
    b = Number(prompt('Digite o segundo valor: '));

    if(!a || !b){
        alert('Parâmetros Inválidos');
        calculadora();
    }

    switch (operacao){
        case operacao = 1: 
            alert(`${a} + ${b} = ${a+b}`);
            break;
        case operacao = 2: 
            alert(`${a} - ${b} = ${a-b}`);
            break;
        case operacao = 3: 
            alert(`${a} * ${b} = ${a*b}`);
            break;
        case operacao = 4: 
            alert(`${a} / ${b} = ${a/b}`);
            break;
        case operacao = 5: 
            alert(`${a} % ${b} = ${a%b}`);
            break;
        case operacao = 6: 
            alert(`${a} % ${b} = ${Math.floor(a/b)}`);
            break;
        case operacao = 7: 
            alert(`${a} ** ${b} = ${a**b}`);
            break;
    }
    novaOperacao();
}

var operacao, a = 0, b = 0;
calculadora();






