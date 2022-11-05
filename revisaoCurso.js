const alunos = ["Thiago", "Aline","Maria","Jão","Carlos","Mario"]
const sala01 = alunos.slice(0,alunos.length/2);
const sala02 = alunos.slice(alunos.length/2);

alunos.pop()
alunos.shift()
console.log(`Sala 01 : ${sala01} Sala 02 : ${sala02}`);
alunos.splice(3,5,"wellinton");

console.log(alunos);