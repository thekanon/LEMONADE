<template>
  <div :class="`list-header ${props.className}`">
    <slot name="header">
      <div
        v-for="header in props.headerList"
        :key="header.id"
        :class="`${header.className}`"
      >
        {{ header.text }}
      </div>
    </slot>
  </div>
</template>

<script setup>
const props = defineProps({
  className: {
    type: String,
    default: '',
  },
  headerList: {
    type: Array,
    default: () => [],
  },
});
</script>

<style scoped>
.list-header {
}
</style>
