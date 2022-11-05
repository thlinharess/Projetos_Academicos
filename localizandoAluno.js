 const alunos = ['Mario', 'Leo', 'João', 'Eduarda', 'Joana', 'Carla',]

 const notasDosAlunos = [10, 7.8 , 9, 8, 6, 9.6]
 
 const listaDeNotasEAlunos = [alunos,notasDosAlunos]
 
 const exibeNomeENota = (nomeDoAluno) => {
     if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){
      let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
      return listaDeNotasEAlunos[0][indice] + ", sua nota é :"
      + listaDeNotasEAlunos[1][indice]
     }else{
      return "Aluno não cadastrado"
  }
 }
 
 console.log(exibeNomeENota('Mario'));