const { createApp, ref } = Vue

//   createApp({

import CardExs from './CardExs.js';

const Exs = {
  template: `
      <div class="card-container">
        <CardExs :project="project" v-for="project in projects"></CardExs>
      </div>
  `,

    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    },

    data(){
        return {
            projects: [],
        }
    },
    methods : {
      obtenerDatos(){
        axios.get('../../assets/data/exs.json')
            .then( resp => this.projects = resp.data)
      },
    },
    mounted(){
        this.obtenerDatos();
    },
    components: {
      CardExs : CardExs
    }
}
  // }).mount('#exs')

export default Exs