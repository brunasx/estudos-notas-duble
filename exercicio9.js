//Peça três notas de um aluno, calcule a média e informe:
//"Aprovado" se a média for maior ou igual a 7
//"Recuperação" se for maior ou igual a 5 e menor que 7
//"Reprovado" se for menor que 5

const nota1 = Number(prompt("digite a primeira nota"))
const nota2 = Number(prompt("digite a segunda nota"))
const nota3 = Number(prompt("digite a terceira nota"))

const media = (nota1 + nota2 + nota3) / 3
console.log(media)

if (media <5){
    alert("SE FUDEU")
} else if (media >= 5 && media <7){
    alert("TA FRACO, PODE MELHORAR")
} else if (media <= 10){
    alert("alguma coisa tu sabe fazer, parabens")
} 

//function exemplo1(){
//const numero = Number(prompt("digite um numero"))
//const numero2 = Number(prompt("digite outro numero"))
//alert(numero+numero2)
//}
//const buttonquestao1 = document.getElementById("questao1")
//buttonquestao1.addEvenListener('click', () => { exemplo1() } )
