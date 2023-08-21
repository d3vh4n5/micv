const sections = document.querySelectorAll("section")
const navButtons = document.querySelectorAll('.optionMenu')

export function scrollSpy(){
    const sectionsObserver = new IntersectionObserver((entradas, observador)=>{
        entradas.forEach(entrada=>{
            if(entrada.isIntersecting){
                const idSectionIntersectada= '#'+entrada.target.id
                history.pushState({}, '', idSectionIntersectada)

                navButtons.forEach(enlace=>{
                    enlace.classList.remove('active')
                    
                    const enlaceHref = enlace.attributes.href.nodeValue
                    if (enlaceHref === idSectionIntersectada){
                        enlace.classList.add('active')
                    }
                })
            }
        })
    },{
        threshold: .1,
        rootMargin: '0px'
    })

    sections.forEach(section=>sectionsObserver.observe(section))
}