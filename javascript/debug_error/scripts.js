function validArray (array, size){
    try {
        if(!array && !size) throw new ReferenceError("Envie os parâmetros");
        if(typeof array !== 'object') throw new TypeError("Array não correspondente com sua entrada");
        if(typeof size !== 'number') throw new TypeError("Tamanho não correspondente com sua entrada");
        if(array.lenght !== size) throw new RangeError("Tamanho e tamanho do array não são iguais");
        return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.name, e.message);
        }
        else if(e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.name, e.message);
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.name, e.message);
        }
    }
}

console.log(validArray([], '10'));