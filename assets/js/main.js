'use strict'

const optionMenu = document.getElementsByClassName('optionMenu');
const checkButton = document.getElementById('check');
const darkScreen = document.getElementById('darkScreen')
import { navButtonsLogic } from "./navBtnLogic.js";
import {scrollSpy} from "./observers.js"
import { loadProjects } from "./projects.js";
const urlProyectos = './assets/js/projects.json'

/*  
    Hacer lo del onload, o documentLoad.
*/

/* Carga dinámica d eproyectos */
fetch(urlProyectos)
  .then(response=>response.json())
  .then(data=>{
    loadProjects(data)
  })

navButtonsLogic()
scrollSpy()


for (let option of optionMenu){
  option.addEventListener('click', ()=>{
    checkButton.checked = false;
    darkScreen.classList.remove('darkScreen');
  });
}
checkButton.addEventListener('change', () => {
  if (checkButton.checked) {
    darkScreen.classList.add('darkScreen');
  } else {
    darkScreen.classList.remove('darkScreen');
  }
});
darkScreen.addEventListener('click', ()=>{
  checkButton.checked = false;
  darkScreen.classList.remove('darkScreen');
})

const cambiarFondo = document.querySelectorAll('.descripcionTarjeta, .btn');
if (/iPhone/i.test(navigator.userAgent)) {
  //alert('Estas en un iphone');
  for (let e of cambiarFondo){
      e.classList.add('fondo-grad');
  }
}
/*
const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('check').checked = false;
  });
});
*/

/* Usar un mail alternativo para recibir estas consultas, no usar el mail normal */
function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const subject = "Nuevo mensaje de " + name;
    const body = "Correo electrónico: " + email + "\n\n" + message;
  
    const mailtoLink = "mailto:juanangelbasgall@hotmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.location.href = mailtoLink;
  }
