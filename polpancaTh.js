class cliente {
    constructor(nome,cpf,email,saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor;
    }
    exibirsaldo(){
        console.log(this.saldo);
    }
}

class clientePoupanca extends cliente{
    constructor(nome,cpf,email,saldo,saldoPoupanca){
        super(nome,cpf,email,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoup(valor){
        this.saldoPoupanca += valor;
    }
} 


const thiago = new clientePoupanca("Thiago Linhares","12345676565","thiago17052002@gmail.com",200,500);

console.log(thiago);