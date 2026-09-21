const botonesVerMas = document.querySelectorAll('.btn-ver-mas');

function alternarInformacion(event) {
const boton = event.target;
const infoExtra = boton.previousElementSibling;

infoExtra.classList.toggle('oculto');

if (infoExtra.classList.contains(oculto))
{boton.textContent = '[Ver mas]' ;} else
{boton.textContent = 'Ver menos' ;}
}



botonesVerMas.forEach(function(boton)
{boton.addEventListener('click' , alternarInformacion);})
