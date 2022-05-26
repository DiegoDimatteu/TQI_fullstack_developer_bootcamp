function comparation (a, b){

    if(!a && a != 0 || !b && b != 0) return `Defina dois números`;
    if(typeof a === 'string'||typeof b === 'string' || a instanceof String || b instanceof String) return `Defina dois números`;

    if(a == b && (a + b) >= 10 && (a + b) >= 20) return `Os números ${a} e ${b} são iguais. Sua soma é ${a + b}, que é maior que 10 e maior que 20`;
    else if(a == b && (a + b) >= 10 && (a + b) < 20) return  `Os números ${a} e ${b} são iguais. Sua soma é ${a + b}, que é maior que 10 e menor que 20`;
    else if(a == b) return `Os números ${a} e ${b} são iguais. Sua soma é ${a + b}, que é menor que 10 e menor que 20`;
    else if(a != b && (a + b) >= 10 && (a + b) >= 20) return `Os números ${a} e ${b} não são iguais. Sua soma é ${a + b}, que é maior que 10 e maior que 20`;
    else if(a != b && (a + b) >= 10 && (a + b) < 20) return `Os números ${a} e ${b} não são iguais. Sua soma é ${a + b}, que é maior que 10 e menor que 20`;
    else if(a != b) return `Os números ${a} e ${b} não são iguais. Sua soma é ${a + b}, que é menor que 10 e menor que 20`;

}

console.log(comparation(10,10));
