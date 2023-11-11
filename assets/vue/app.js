import componente1 from './components/componente1.js';
import exs from './components/exs.js';

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

const miAplicacion = Vue.createApp({

    components: {
        saludo : componente1,
        mouse: componente2,
        exs : exs,
    }
}).mount("#app")