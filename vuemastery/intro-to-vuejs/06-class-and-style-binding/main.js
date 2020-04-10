var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green.jpg'
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ],
        cart: 0,
        color: 'blue',
        fontSize: '13px',
        styleObject: {
            color: 'red',
            fontSize: '23px',
        },
        styleObject2: {
            margin: '5px',
            padding: '20px',
        }
    },
    methods: {
        // addToCart: function() {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        // updateProduct: function(variantImage) {
        updateProduct(variantImage) {
            console.log('update product...');
            this.image = variantImage;
        }
    }
});
