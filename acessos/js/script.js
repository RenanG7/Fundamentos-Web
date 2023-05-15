
/* 
Case sensitive -> reconhece letras maiusculas e minusculas

formas para acessar o DOM
por teg: getElementByTegName()
por id: getElementById()
por nome: getElementsByName()
por class: getElementsByclassName()
por seletor: querySeletor()  --> forma de acessar o Dom mais usada
*/ 

let nome = window.document.getElementById("nome") /*--> quando for gatElement nao precisa do incial # ou .*/
let email = document.querySelector("#email") /*--> para chamar o email é com # no inicio por ser uma Id, caso fosse classe seria . no inicio*/ 
let assunto = document.querySelector("#assunto")
let nomeOK = false
let emailOk = false
let assuntoOK = false
let mapa = document.querySelector("#mapa")

nome.style.width = "90%"
email.style.width = "90%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome") 
    if(nome.value.length < 3){
      txtNome.innerHTML = "Nome inválido"  
      txtNome.style.color ="red"     
    } else {
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color ="black"
        let nomeOK = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
     txtEmail.innerHTML = "E-mail Invalido"
     txtEmail.style.colo = "red"
    }else{
        txtEmail.innerHTML = "E-mail Valido"
        txtEmail.style.colo = "green"
        let emailOK = true  
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 10){
    txtAssunto.innerHTML = "Você excedeu o limite maximo de caracteres!!"
    txtAssunto.style.color = "red" 
    txtAssunto.style.displey = "block"
   } else {
    txtAssunto.style.displey = "none" 
    txtAssunto.style.color = "red" 
    let assuntoOK = true
   }
}
function enviar(){
    if(nomeOK == true && emailOk == true && assuntoOK == true){
        alert("Formulario Enviado com sucesso!!")
    } else {
        alert ("preencha o formulario corretamente antes de enviar...")
    }
}
function mapaZoom(){
 mapa.style.width = "800px"
 mapa.style.haigth = "300px"

}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.haigth = "250px"

}

