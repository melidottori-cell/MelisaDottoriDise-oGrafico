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

const slides= document.querySelectorAll('.slide');
const dots= document.querySelectorAll('.dot');
const prevBtn= document.getElementById('prevBtn');
const nextBtn= document.getElementById('nextBtn');
const carouselContainer= document.getElementById('carousel');

let currentSlide= 0;
let autoSlideInterval;

function showSlide (index){
    if (slides.length === 0) return;
    if (index >=  slides.length){
        currentSlide= 0;
    }else if (index<0){
        currentSlide =slides.length-1;
    }else{
        currentSlide=index;
    }
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add("active");
}



function  nextLide (){
    showSlide(currentSlide + 1);
}
function prevSlide(){
    showSlide(currentSlide - 1);
}

if (nextBtn) nextBtn.addEventListener('click', nextLide);
 if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    

const formulario = document.getElementById(formulario);
formulario.addEventListener("submit", function(event)
{const nombre = document.getElementById("nombre").value;
const email= document.getElementById("email").value;
const mensaje = document.getElementById("mensaje").value;
const resultado = document.getElementById("resultado");

if (nombre.length <3) {
    event.preventDefault();
    resultado.textContent.textContent = "El nombre debe tener al menos 3 caracteres"; }
    else if (mensaje.trim() === ""){
    event.preventDefault();
    resultado.textContent = "El mensaje no puede estar vacio.";
}  else {
event.preventDefault();
resultado.textContent = "Formulario enviado correctamente";}
});
