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


class clientePoupanca extends cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupo(valor){
        this.saldoPoupanca += valor;
    }
}


const andre = new clientePoupanca("Andre","andre@gmail.com","12345676554",100,200)



andre.depositar(50)
andre.depositarPoupo(50)

console.table(andre);
