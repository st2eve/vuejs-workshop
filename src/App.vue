<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable prettier/prettier -->
<script>
import ProductDisplay from "./components/ProductDisplay.vue";
import ReviewForm from "./components/ReviewForm.vue";
import ReviewList from "./components/ReviewList.vue";

export default {
  components: {
    ProductDisplay,
    ReviewForm,
    ReviewList
},
  data() {
    return {
      cart: 0,
      premium: false,
      reviews: [],
    };
  },
  methods: {
    updateCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    addReview(review){
      this.reviews.push(review)
    }
  },
};
</script>
<template>
  <div class="nav-bar"></div>
  <ProductDisplay
    :cart="cart"
    :premium="premium"
    @add-to-cart="updateCart"
    @remove-from-cart="removeFromCart"
  />
  <ReviewList v-if="reviews.length" :reviews="reviews" />
  <ReviewForm @review-submitted="addReview" />
</template>
