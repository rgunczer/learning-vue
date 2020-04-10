var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        onSale: true,
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green.jpg',
                variantQuantity: 1
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg',
                variantQuantity: 0
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
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            this.cart -= 1;
        },
        updateProduct(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        onSaleTitle() {
            return this.onSale ? this.brand + ' ' + this.product : '';
        }
    }
});
