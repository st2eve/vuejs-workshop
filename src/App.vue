<script>
export default {
  data() {
    return {
      cart: 0,
      product: "socks",
      description: "Beautiful and soft touch socks",
      image: "./src/assets/images/socks_blue.jpg",
      url: "https://vuejs.org/guide/introduction.html",
      inventory: 15,
      onSale: true,
      details: ["50% coton", "30% wool", "20% polyester"],
      sizes: ["XS", "S", "L", "XL"],
      variants: [
        {
          id: 1,
          color: "green",
          image: "./src/assets/images/socks_green.jpg",
        },
        {
          id: 2,
          color: "blue",
          image: "./src/assets/images/socks_blue.jpg",
        },
      ],
    };
  },
  methods: {
    addToCart() {
      if (this.inventory > 0) {
        this.cart += 1;
        this.inventory -= 1;
      }
    },
    removeToCart() {
      if (this.cart > 0) {
        this.cart -= 1;
        this.inventory += 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
};
</script>

<template>
  <div class="nav-bar"></div>
  <div class="cart">Cart ({{ cart }})</div>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <a :href="url" target="_blank">
          <img :src="image" :class="{outOfStockImg: inventory == 0}" />
        </a>
      </div>
      <div class="product-info">
        <h1>
          {{ product }}
        </h1>
        <p>
          {{ description }}
        </p>
        <p v-show="onSale">On sale !</p>
        <p v-if="inventory > 10">In stock</p>
        <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out !</p>
        <p v-else>Out of stock</p>
        <ul>
          <li v-for="detail in details">
            {{ detail }}
          </li>
        </ul>
        <ul>
          <li v-for="size in sizes">
            {{ size }}
          </li>
        </ul>
        <div
          v-for="variant in variants"
          :key="variant.id"
          @mouseover="updateImage(variant.image)"
          class="color-circle"
          :style="{ backgroundColor: variant.color }"
        ></div>
        <button
          class="button"
          @click="addToCart()"
          :class="{ disabledButton: inventory == 0 }"
          :disabled="inventory == 0"
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
  </div>
</template>
