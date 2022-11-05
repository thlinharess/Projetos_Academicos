const nomes = ["Thiago","Pedro","kethellen"]
const notas = [9,10,8]

const listaDeNotas = [nomes,notas]

const exibirNotas = (nomeDoAluno) => {
    if(listaDeNotas[0].includes(nomeDoAluno)){
        let indice = listaDeNotas[0].indexOf(nomeDoAluno);
        return "Olá, " + listaDeNotas[0][indice] + 
        "! Sua nota é: " + listaDeNotas[1][indice]
    }else{
        return 'Aluno não encontrado :('
    }
}

console.log(exibirNotas('Pedro'));