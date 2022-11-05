function cliente(nome,cpf,email,saldo)
{
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor)
    {
        this.saldo += valor ;
    }
}

function clientePoupanca(nome,cpf,email,saldo,saldoPoup)
{
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const Ju = new clientePoupanca("Ju","12343256785","juliana@gmial.com",2000,300)


 console.log(Ju)

clientePoupanca.prototype.depositarPoup = function(valor)
{
    this.saldoPoup += valor;
}

Ju.depositarPoup(30);

console.log(Ju)