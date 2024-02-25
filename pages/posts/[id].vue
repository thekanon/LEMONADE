<template>
  <div>
    <h1>Post Details</h1>
    <PostDetail :post="posts" />
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types';
import { useRoute } from 'vue-router';
import PostDetail from '@/components/common/Organisms/PostDetail.vue';

const route = useRoute();

const { data: posts } = await useFetch<IPost>(
  'https://koreanjson.com/posts/' + route.params.id,
  {
    default: () => [],
  },
);

console.log(posts.value);
</script>

<style scoped></style>
