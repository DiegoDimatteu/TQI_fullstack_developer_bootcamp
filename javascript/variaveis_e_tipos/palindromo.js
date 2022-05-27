function palindromoUm (palavra){
    if(!palavra) return `String inexistente!`;
    let aux = palavra.split("").reverse().join("");
    if(palavra == aux) return `Verdadeiro`;
    else return `Falso`;
}

function palindromoDois (palavra){
    if(!palavra) return `String inexistente!`;
    for(let i = 0; i < palavra.length / 2; i++){
        if(palavra[i] != palavra[palavra.length -1 - i]) return `Falso`;
    }
    return `Verdadeiro`;
}

console.log(palindromoUm("cachorro"));
console.log(palindromoDois("arara"));

