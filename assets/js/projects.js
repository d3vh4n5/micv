// aqui va la función que crea las tarjetas

const retornarCardHTML = (objeto)=>{
    let status = ''
    if (objeto.windowed){
        var visit = objeto.visit_url 
            ? `<a href="${objeto.visit_url}" target="newwindow" onclick="window.open('${objeto.visit_url}', 'newwindow', 'width=800, height=600'); return false;">Visit Page</a>`
            : '';
    } else {
        var visit = objeto.visit_url 
            ? `<a href="${objeto.visit_url}" target="_blank">Visit Page</a>`
            : '';
    }
    let code = objeto.code_url
        ? `<a href="${objeto.code_url}" target="_blank">View Code</a>`
        : '';
    let download = objeto.download_url
        ? `<a href="${objeto.download_url}" download>Download</a>`
        :''

    if (objeto.status == "finished"){
        status = '<span class="green">Finished</span>'
    } else if (objeto.status == "developing") {
        status = '<span class="orange">Developing</span>'
    }

    const techColors = {
        "React": "var(--react), var(--react)",
        "Node": "var(--node)",
        "JS": "var(--js), var(--js)",
        "Python": "var(--python)",
        "php": "var(--php), var(--php)",
    }

    const tecnologia = objeto.technology
    let borderImageSource = techColors[tecnologia] || "var(--colorAcento), var(--colorFuente)";

    if (!objeto.visible){
        return '';
    }else{
        return `
            <div class="tarjeta" style="border-image-source: linear-gradient(45deg, ${borderImageSource});">
                <img class="imgTarjeta" src="${objeto.img}" alt="Project image">
                <div class="descripcionTarjeta">
                    <h4>"${objeto.title}"</h4>
                    <p>${objeto.description}</p>
                    ${visit}
                    ${download}
                    ${code}
                    <br>
                    <p class="status">
                        status: ${status}
                    </p>
                </div>
            </div>
        `
    }
}


export const loadProjects = (array)=>{
    const projectsContainer = document.querySelector('#projectsContainer')

    projectsContainer.innerHTML = '';

    array.forEach(element => {
        projectsContainer.innerHTML += retornarCardHTML(element)
    });
}