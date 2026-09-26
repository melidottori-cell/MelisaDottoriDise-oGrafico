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
const prevBtn= document.getElementById('.prevBtn');
const nextBtn= document.getElementById('.nextBtn');
const carouselContainer= document.getElementById('.carousel');

let currentSlide= 0;
let autoSlideInterval;

function showSlide (index)
{if (slides.length === 0) return;
if (index>= SLIDES.LENGTH)
{currentSlide= slides.length -1;}
else {currentSlide =index;}
}
slides [currentSlide] .classList.add(active);

function  nextLide (){
    showSlide(currentSlide + 1);
}
function prevSlide(){
    showSlide(currentSlide - 1);}

    if (nextBtn) nextBtn.addEventListener(
       'click', nextSlide);
 if (prevBtn) prevBtn.addEventListener(
       'click', nextSlide);
    
