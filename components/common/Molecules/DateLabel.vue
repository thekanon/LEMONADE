<template>
  <TextLabel :class-name="props.className">
    {{ formatDate(props.date) }}
  </TextLabel>
</template>

<script setup>
import TextLabel from '../Atoms/TextLabel.vue';

const props = defineProps({
  date: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};
</script>

<style scoped></style>
