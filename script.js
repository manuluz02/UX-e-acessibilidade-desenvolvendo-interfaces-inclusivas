let btnAjuda = document.querySelector(".botao-help");
let bntFechar  = document.querySelector(".botao-close");
let modal = document.querySelector(".modal-fundo");

btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);

function abreModal() {
    moodal.style.display = "block"
}

function fechaModal() {
    moodal.style.display = "none"
}