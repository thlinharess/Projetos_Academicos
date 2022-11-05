const clientes = [{
    nome: "André",
    idade:36,
    cpf:"12345678909",
    email:"andre202@gmail.com",
    fones: ["55987654738","55908765846" ],
    dependentes:[{  
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"},
        { 
        nome:"Samia Maria",
        parentesco:"filha",
        dataNasc:"04/01/2014"}],
},
{
    nome: "Juliana",
        cpf:"67745587754",
        dependentes: [{
            nome:"Sofia",
            parentesco:"filha",
            dataNasc: "30/08/2020"}],
   },
   {
    nome: "Gabriel",
    cpf: "12365576687",
    dependentes:[{
        nome: "Camilla",
        parentesco:"sobrinha",
        dataNasc: "17/05/2003"}],
  },
  {
    nome: "Marcio",
    cpf:"74498876609",
    dependentes:[{
        nome:"Marcos",
        parentesco:"filho",
        dataNasc:"13/09/1998"}]
  }

]

//Uso de Spread operator

let dependentes1 = [];

for(i=0 ; i < clientes.length ; i++){dependentes1.push(...clientes[i].dependentes)};

clientes.forEach((clientes) => {dependentes1.push(...clientes.dependentes)});

console.table(dependentes1);

