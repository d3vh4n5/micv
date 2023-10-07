console.log("preloader")

window.onload = function(){
    let preloader = document.querySelector('#preloader')
    preloader.classList.add('fade-out')

    // preloader.addEventListener("transitionend", ()=>{
    //     document.body.removeChild(preloader)
    // })

    preloader.addEventListener("animationend", () => {
        preloader.remove()
    })
}