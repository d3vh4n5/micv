'use strict'

let optionMenu = document.getElementsByClassName('optionMenu');

for (let option of optionMenu){
  option.addEventListener('click', ()=>{
    document.getElementById('check').checked = false;
  });
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
