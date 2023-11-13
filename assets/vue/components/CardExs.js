const CardExs = {
    props : {
        project: Object,
    },
    template: `
        <div class="carta">
            <div class="back">
                <p>
                    {{ project.description }}
                </p>
                <a :href=project.visit_url v-if="project.visit_url != ''">Visit</a>
            </div>
            <div class="front">
                <div class="img" :style="{ background: 'url(' + project.img + ')' }"></div>
                <p>
                    {{ project.title }}
                </p>
                
                <div class="tech-container python" v-if="project.technology === 'Python'">
                    <img class="tech-logo right" src="./assets/img/Python_logo_01.svg.png" alt="Python logo">
                </div>
                <div class="tech-container php" v-if="project.technology === 'php'">
                    <img class="tech-logo" src="./assets/img/PHP-logo.svg.png" alt="php logo"> 
                </div>

                <div class="tech-container node" v-if="project.technology === 'React' || project.technology === 'Node'">
                    <img class="tech-logo" src="./assets/img/JavaScript-Symbol.png" alt="JavaScript logo">
                </div>

                <div class="tech-container ux-ui" v-if="project.technology === 'ux ui'">
                    <img class="tech-logo right" src="./assets/img/ux-ui-logo.svg" alt="UX UI logo">
                </div>
            </div>
        </div>
    `,
    style:`
    .carta h2{
        color: blue;
    }
    `
    
}

export default CardExs;