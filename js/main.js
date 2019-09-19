
function clicou(){
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>'
    // alert('obrigado por clicar')
}

function redirecionar(){
    // window.open('https://www.facebook.com/')
    window.location.href = 'https://www.facebook.com/'
}

function trocar(elemento){
    // document.getElementById('mousemove').innerHTML = 'Obrigado por passar o mouse'
    elemento.innerHTML = 'Obrigado por passar o mouse'
}

function voltar(elemento){
    // document.getElementById('mousemove').innerHTML = 'Passe o mouse aqui'
    elemento.innerHTML = 'Passe o mouse aqui'
}

function load(){
    alert('Página carregada')
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
-------- Aula Função ---------

function soma(n1, n2){
    return n1 + n2
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true
    }
    else{
        validar = false
    }
    return validar
}

var idade = +prompt('Digite sua idade')
console.log(validaIdade(idade))

alert(soma(5,10))

-------- Aula Condicionais, laços de repetição, date------
//date

var d = new Date()

alert(d.getDay())
alert(d.getHours())
alert(d.getMinutes())

//Laços de repetição

--for--
var count

for(count = 0; count <= 5; count++){
    alert(count)
}

--While--
var count = 0

while(count <= 5){
    console.log(count)
    count++
}

//Condicionais
var idade = +prompt('Qual sua idade ?')

if(idade >= 18){
    alert('Maior de idade')
}
else{
    alert('Menor de idade')
}

-------- Aula dicionario/ lsita dicionario -----------

//Lista de dicionário
var frutas = [{nome:'maçã', cor:'vermelha'}, {nome:'uva', cor:'roxa'}]
console.log(frutas)
alert(frutas[1].nome)

//Dicionario
var frutaa = {nome:'maçã', cor:'vermelha'}
console.log(fruta.nome)
alert(fruta.cor)


--------- Aula de Array ------------------

var lista = ['maçã', 'pêra', 'laranja'];
lista.push('uva')
lista.pop()

console.log(lista)
console.log(lista.toString())
console.log(lista.join(' - '))


--------- Aula de introdução --------------

var nome = 'Gabriel Hidalgo'
var n1 = 5
var n2 = 3
var frase = 'japão é o melhor time do mundo'
 alert(nome + ' tem ' + idade + ' anos')
console.log(nome)
console.log(n1 * n2)
console.log(frase.toLowerCase())
 alert(frase.replace('japão', 'brasil'))
*/