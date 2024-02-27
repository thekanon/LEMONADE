<template>
  <div class="title-container">
    <TextLabel class="text-sm font-semibold text-gray-600">댓글 목록</TextLabel>
  </div>
  <div v-if="props.comments.length != 0" class="comment-list">
    <Comment v-for="comment in comments" :key="comment.id" :comment="comment" />
  </div>
</template>

<script setup lang="ts">
import Comment from '@/components/common/Molecules/Comment.vue';
import TextLabel from '@/components/common/Atoms/TextLabel.vue';
import type { IComment } from '@/types';

const props = defineProps<{
  comments: IComment[];
}>();
</script>

<style scoped>
.title-container {
  margin: 1rem;
}
.comment-list {
  -webkit-overflow-scrolling: touch;
}
</style>
