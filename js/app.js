const { createApp } = Vue;

createApp({
    data() {
        return{
            emails: []
        }
    },
    methods: {
        generatorEmails() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res);
                console.log(res.data.response);
                this.emails.push(res.data.response);
            })
        }
    },
}).mount('#app')