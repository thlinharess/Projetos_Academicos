const cliente = {
    nome: "André",
    idade:36,
    cpf:"12345678909",
    email:"andre202@gmail.com"
}
                //0       //1 
const chaves = ['nome', 'idade', 'cpf', 'email']

console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));