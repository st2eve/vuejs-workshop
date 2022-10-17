const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            product: 'socks',
            description: 'Beautiful and soft touch socks',
            image: './assets/images/socks_blue.jpg',
            url: 'https://vuejs.org/guide/introduction.html',
            inventory: 100,
            onSale : true,
            details: ['50% coton', '30% wool', '20% polyester'],
            sizes: ['XS', 'S', 'L', 'XL'],
            variants: [
                {
                    id: 1, color: 'green'
                },
                {
                    id: 2, color: 'blue'
                }
            ],
        }
    },
    method: {
        addToCart(){
            this.cart += 1;
        }
    }
})