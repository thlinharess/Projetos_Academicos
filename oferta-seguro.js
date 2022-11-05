const cliente = {
    nome: "André",
    idade:36,
    cpf:"12345678909",
    email:"andre202@gmail.com",
    fones: ["55987654738","55908765846" ],
    dependentes:[
        {  
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"},

        { nome:"Samia Maria",
        parentesco:"filha",
        dataNasc:"04/01/2014"}
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}



function ofercerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

ofercerSeguro(cliente);