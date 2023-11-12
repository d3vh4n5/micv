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
                {{ project.title }}
                
                ⚛️
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