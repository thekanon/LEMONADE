<template>
  <div>
    <PostList :posts="posts" :increment="20" :header="header" />
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types';
import PostList from '~/components/common/Organisms/PostList.vue';

const { data: posts } = await useFetch<IPost[]>(
  'https://koreanjson.com/posts',
  {
    default: () => [],
  },
);

const header = [
  { text: '글 제목', className: 'col-span-3', id: 1 },
  { text: '작성일', id: 2 },
  { text: '최근수정일', id: 3 },
  { text: '유저 ID', id: 4 },
];
</script>

<style></style>
