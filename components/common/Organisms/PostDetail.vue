<template>
  <div>
    <h1>{{ post.title }}</h1>

    <p>{{ post.content }}</p>
    <p>{{ post.createdAt }}</p>
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types';

const props = defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true,
  },
});
</script>

<style scoped>
/* Your style code here */
</style>
