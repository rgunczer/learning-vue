Vue.component('test', {
    props: {
        message: {
            type: String,
            required: true,
            default: "Hi"
        }
    },
    template: `<h1>I'm a component {{ message }}</h1>`,
    data() {
        return {

        };
    }
});

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img v-bind:src="image">
            </div>

            <div class="product-info">
                <h1 :style="[styleObject, styleObject2]">{{ title }}</h1>
                <h1 :style="[styleObject, styleObject2]">{{ onSaleTitle }}</h1>

                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
                <p>User is premium: {{ premium }}</p>
                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details">
                        {{ detail }}
                    </li>
                </ul>

                <div v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                </div>

                <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
                <button @click="removeFromCart">Remove from Cart</button>

                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>

            </div>
        </div>
    `,
    data() {
        return {
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
        };
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
        },
        shipping() {
            if (this.premium) {
                return "Free";
            }
            return 2.99;
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
});
