import Exs from './components/Exs.js';
import FooterComponent from './components/FooterComponent.js';

const componente2 = {
    template: `
        <div
            v-on:mouseover="cambiarNombre()"
            v-on:mouseout="reestablecerNombre()"
        >
            <h4><span id="nombre">{{titulo}}</span></h4>
        </div>
    `,
    data(){
        return {
            tituloOriginal: "Componentes en vue.js",
            titulo: "componente2 en vue.js",
        }
    },
    methods: {
        cambiarNombre(){
            this.titulo = "EL MOUSE ESTA SOBRE";
        },
        reestablecerNombre(){
            this.titulo = this.tituloOriginal;
        }
    }
}


Vue.createApp({

    components: {
        mouse: componente2,
        exs : Exs,
        footercomponent : FooterComponent,
    }
}).mount("#app")