const { createApp, ref } = Vue

  createApp({

    setup() {
      const message = ref('Hello vue!')
      return {
        message
      }
    },

    data(){
        return {
            cards: []
        }
    },
    mounted(){
        axios.get('../assets/js/exs.json')
            .then( resp => this.cards = resp.data)
    }


  }).mount('#exs')