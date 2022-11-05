class cliente {
    constructor(nome,email,cfp,saldo){
        this.nome = nome
        this.email = email
        this.cfp = cfp
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor;
    }
    exibirSaldo(){
        console.log(this.saldo);
    }
}

const andre = new cliente("André", "andre@gmail.com","12345676543",100);

andre.exibirSaldo();
console.log(andre);

const pessoa = {
    nome: "Ana",
    email:"ana@gmail.com",
    imprimenome: function(){
        console.log(`${this.nome}`)
    }
}

pessoa.imprimenome();

//call - Método de chamamento 
//apply - Recebe argumentos de um Array 
//bind - prende ou liga quando o this (perde o camionho de origem) 