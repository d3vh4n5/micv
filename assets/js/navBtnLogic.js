export const navButtonsLogic = ()=>{

    const navButtons = document.querySelectorAll('.optionMenu')
    
    navButtons.forEach(navButton=>{ 
        navButton.addEventListener('click', (e)=>{
            navButtons.forEach(navButton=> navButton.classList.remove('active'))
            let element = e.target
            element.classList.toggle('active')
        })
    })
}

