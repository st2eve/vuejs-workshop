<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable prettier/prettier -->
<script>
import ProductDisplay from './components/ProductDisplay.vue';

export default {
  components: {
    ProductDisplay,
  },
  data() {
    return {
      premium: false,
    }
  }
} 

</script>
<template>
  <div class="nav-bar"></div>
  <ProductDisplay :premium="premium" />
</template>
