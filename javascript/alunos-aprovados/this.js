function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Cleiton",
    idade: 45,
}
const pessoa2 = {
    nome: "Ana",
    idade: 22,
}
const pessoa3 = {
    nome: "Paulo",
    idade: 16,
}
const pessoa4 = {
    nome: "Antonietta",
    idade: 33,
}
const pessoa5 = {
    nome: "Robesvaldo",
    idade: 88,
}
const animal = {
    nome: "Floquinho",
    idade: 2,
    raça: "Lhasa Apso",
}

// console.log(calculaIdade.call(pessoa2, 30));
// console.log(calculaIdade.call(animal, 30));
// console.log(calculaIdade.apply(pessoa2, [2]));
console.log(calculaIdade.apply(pessoa4, [33]));