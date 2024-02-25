<template>
  <span :class="className">
    <slot />
  </span>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
});

const className = ref('text-label ' + props.class);
</script>

<style scoped>
.text-label {
  /* font-size: 1.6rem; */
}
</style>
