const app = Vue.createApp({
    data() {
        return {
            firstName: 'Vahe',
            lastName: 'Abovyan',
            email: 'vahe.abov@gmail.com',
            gender: 'male',
            picture: 'https://scontent.fevn6-4.fna.fbcdn.net/v/t39.30808-6/243293757_4334472809998581_8531085474633851814_n.jpg?_nc_cat=110&_nc_rgb565=1&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-FKIq0ng8GgAX9KkF5T&_nc_ht=scontent.fevn6-4.fna&oh=e78a7e492037aba27f88de942fb0da17&oe=61B64E67'
        };
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api');
            const { results } = await res.json();
            console.log(results);
            this.firstName = results[0].name.first,
                this.lastName = results[0].name.last,
                this.email = results[0].email,
                this.gender = results[0].gender,
                this.picture = results[0].picture.large;
        }
    }
});

app.mount('#app');