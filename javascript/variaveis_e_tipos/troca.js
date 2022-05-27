function troca (vetor) {
    if(!vetor || !vetor.length) return -1;
    let aux = [];
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0 && vetor[i] != 0) aux.push(0);
        else aux.push(vetor[i]);
    }
    return aux;
}

console.log(troca([1,3,4,6,80,33,23,90]));
console.log(troca([]));
console.log(troca(null));
