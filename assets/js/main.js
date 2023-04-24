'use strict'

const optionMenu = document.getElementsByClassName('optionMenu');
const checkButton = document.getElementById('check');

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
