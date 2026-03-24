//function
//getElementById
//addEventListener

// questao 1

function exemplo1(){
    //some dois numeros inteiros
    const numero = Number(prompt("Digite um numero"))
    const numero2 = Number(prompt("Digite outro numero"))

    alert(numero+numero2)
} // termina 
const buttonquestao1 =  document.getElementById("questao1")
buttonquestao1.addEventListener("click", () => { exemplo1() } )