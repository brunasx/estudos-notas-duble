//peça o sexo da pessoa (H para homem, M para mulher) e a altura
//use as formulas para calcular o peso ideal:
//Homens: (72.7 x altura) - 58
//Mulheres: (62.1 x altura) - 44.7

const sexo = Number =(prompt("Caso voce seja homem digite H, caso mulher digite M:"))
const altura = Number =(prompt("Digite sua altura:"))

if (sexo == "H"){
    const H = (72.7*altura)-58
    alert(H)
} else if (sexo == "M"){
    const M = (62.1*altura) - 44.7
    alert(M)
}