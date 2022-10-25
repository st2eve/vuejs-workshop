<script>
import ProductDetails from "./ProductDetails.vue";
export default {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
        cart: {
            type: Number,
        },
    },
    data() {
        return {
            brand: "Vue Mastery",
            product: "socks",
            description: "Beautiful and soft touch socks",
            selectedVariant: 0,
            url: "https://vuejs.org/guide/introduction.html",
            onSale: true,
            details: ["50% coton", "30% wool", "20% polyester"],
            sizes: ["XS", "S", "M", "L", "XL"],
            variants: [
                {
                    id: 1,
                    color: "green",
                    image: "./src/assets/images/socks_green.jpg",
                    quantity: 15,
                },
                {
                    id: 2,
                    color: "blue",
                    image: "./src/assets/images/socks_blue.jpg",
                    quantity: 0,
                },
            ],
        };
    },
    methods: {
        addToCart() {
            if (this.variants[this.selectedVariant].quantity > 0) {
                this.$emit('add-to-cart');
                this.variants[this.selectedVariant].quantity -= 1;
            }
        },
        removeToCart() {
            if (this.cart > 0) {
                this.$emit('remove-from-cart');
                this.variants[this.selectedVariant].quantity += 1;
            }
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
    },
    computed: {
        title() {
            return this.brand + " " + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        },
        onSaleDisplay() {
            if (this.onSale == true) {
                return this.brand + " " + this.product + " is on sale !";
            }
            else {
                return this.brand + " " + this.product + " will be on sale soon !";
            }
        },
        shipping() {
            if (this.premium) {
                return "Free";
            }
            else {
                return 4.99;
            }
        }
    },
    components: { 
        ProductDetails 
    }
}
</script>

<template>
    <div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <a :href="url" target="_blank">
                <img :src="image" :class="{ outOfStockImg: !inStock }" />
            </a>
        </div>
        <div class="product-info">
            <h1>
                {{ title }}
            </h1>
            <p>
                {{ description }}
            </p>
            <p>{{ onSaleDisplay }}</p>
            <p v-if="inStock">In stock</p>
            <p v-else>Out of stock</p>

            <p>
                Shipping: {{ shipping }}
            </p>
            <div class="list">
                <ProductDetails :details="details" />
                <ul>
                    <li v-for="size in sizes">
                        {{ size }}
                    </li>
                </ul>
            </div>
            <div class="circle__container">
                <div
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }"
                ></div>
            </div>
            <div class="button__container">
                <button
                    class="button"
                    @click="addToCart()"
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock"
                >
                    Add to cart
                </button>
                <button
                    class="button"
                    @click="removeToCart()"
                    :class="{ disabledButton: cart == 0 }"
                    :disabled="cart == 0"
                >
                    Remove from cart
                </button>
            </div>
        </div>
        <div class="cart">Cart ({{ cart }})</div>
        </div>
    </div>
</template>