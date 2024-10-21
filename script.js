/*
let menuButton = document.getElementById("menuButton");
let menu = document.getElementById("menu");

menuButton.addEventListener("click", function(){
    if(menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
});
*/
let areaServicos = document.getElementById("areaServicos");
let menuServicos = document.getElementById("menuServicos");

areaServicos.addEventListener("click", function(){
    if(menuServicos.style.display === "block"){
        menuServicos.style.display = "none";
    }else{
        menuServicos.style.display = "block";
    }
});

let trilho = document.getElementById('trilho')
let body =document.querySelector('body')
trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

function voltarPaginaAnterior(){
    location.replace(document.referrer)
}
document.getElementById('botao-Voltar')
addEventListener("click",voltarPaginaAnterior)