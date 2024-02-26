<template>
  <div
    v-if="props.comment.id"
    class="max-w-full bg-white shadow-lg rounded-lg p-4"
  >
    <div class="flex flex-col">
      <div class="mb-2 text-gray-900 font-bold">
        유저 ID:
        <span class="font-normal">{{ comment.UserId }}</span>
      </div>
      <p class="text-gray-700 text-lg mb-4">"{{ comment.content }}"</p>
      <div class="text-gray-600 text-xs">
        작성일:
        <DateLabel :date="comment.createdAt" />
        수정일:
        <DateLabel :date="comment.updatedAt" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DateLabel from '@/components/common/Molecules/DateLabel.vue';
import type { IComment } from '@/types';
const props = defineProps<{
  comment: IComment;
}>();
</script>

<style scoped></style>
