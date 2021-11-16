const App = {
    data() {
        return {
            servers: [],
            name: '',
            chooseElement: '',
            i: -1,
        }
    },
    methods: {
        async createServer() {
            const data = {
                name: this.name,
                status: 'created'
            }
            const res = await fetch('/api/server', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            this.name = ''
            const newServer = await res.json()
            this.servers.push(newServer)
        },
        async edit(){
          const data = {
              name: this.chooseElement,
              i: this.i
          }

            const res = await fetch(`/api/server/${this.i}/${this.chooseElement}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

          this.servers[this.i].name = this.chooseElement
        },
        async remove(id) {
            await fetch(`/api/server/${id}`, {method: 'DELETE'})
            this.servers = this.servers.filter(s => s.id !== id)
        },
        async choose(id){
            for (let i = 0; i < this.servers.length; i++) {
                if(id === this.servers[i].id){
                    this.chooseElement = this.servers[i].name
                    this.i = i
                }
            }
        }
    },
    async mounted() {
        const res = await fetch('/api/server')
        this.servers = await res.json()
    }
}

Vue.createApp(App).mount('#app')
