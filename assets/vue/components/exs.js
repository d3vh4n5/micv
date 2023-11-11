// const { createApp, ref } = Vue

//   createApp({

const exs = {
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
        axios.get('../../assets/data/exs.json')
            .then( resp => this.cards = resp.data)
    }

}
  // }).mount('#exs')

export default exs