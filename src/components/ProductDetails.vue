<script>
export default {
  props: {
    details: {
      type: Array,
    },
  },
};
</script>

<template>
  <ul>
    <li v-for="detail in details" :key="detail">
      {{ detail }}
    </li>
  </ul>
</template>
