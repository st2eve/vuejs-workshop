const app = Vue.createApp({
    data(){
        return{
            product: 'socks',
            description: 'Beautiful and soft touch socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://vuejs.org/guide/introduction.html',
            inventory: 100,
            onSale : true,
            details: ['50% coton', '30% wool', '20% polyester'],
            variants: [
                {
                    id: 1, color: 'green'
                },
                {
                    id: 2, color: 'blue'
                }
            ],
        }
    }
})