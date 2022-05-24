# Atividades em JavaScript

### Instrutora: Stephany Nusch [GitHub](https://github.com/stebsnusch)

## Atividade do Bootcamp de JavaScript.

Arquivo `script.js` contém uma atividade de mostrar os nomes dos alunos aprovados em uma disciplina usando destructuring. 

E a atividade `this.js`, dada uma função `calculaIdade`, utilize os métodos apply e call para modificar o this.

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```