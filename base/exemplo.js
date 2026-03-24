//------------------------------------------exemplo1--------------------------------------
//function
function exercicio1() {
    alert("oi")
}
//getEelementById
const batata = document.getElementById("exercicio1")
//addEventListner
batata.addEventListener("click", () => { exercicio1() })

//------------------------------------------exemplo2--------------------------------------

//function
function pao() {//o pao precisa estar igual o addeventilistener
    alert("oii!!")
}
//getEelementById
const botao = document.getElementById("batata")//aqui no "" precisa colocar o identificador, o id
//addEventListner
botao.addEventListener("click", () => { pao() })//precisa estar igual o function