const app = Vue.createApp({
    //data, function
    // template: '<h1>I\'m the template</h1>'
    data(){
        return {
            showBooks: true,
            title: 'The final empire',
            age:45
        }
    },
    methods: {
        changeTitle(title){
            this.title = title
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')