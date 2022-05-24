const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Cleiton',
		nota: 3,
		turma: '1A',
	},
];

function alunosAprovados(lista, media) {
    let aprovados = [];
    let i;
    
    for(i = 0; i < lista.length; i++){
        let {nota, nome} = lista[i];
        if(nota >= media) aprovados.push(nome);
    }
    console.log(aprovados);
}

alunosAprovados(alunos, 5);