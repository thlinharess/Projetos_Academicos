function cliente(nome, cpf,email,saldo)
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

 const andre = new cliente("André", "12345676587", "andre@gmail.com",2000);

 console.log(andre)

