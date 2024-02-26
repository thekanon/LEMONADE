<template>
  <div ref="postListRef" class="post-list overflow-auto" @scroll="checkScroll">
    <ListHeader
      :class-name="`grid grid-cols-6 text-center font-bold p-3 bg-primary-500 text-white`"
      :header-list="props.header"
    />
    <NuxtLink
      v-for="post in visiblePosts"
      :key="post.id"
      :to="`/posts/${post.id}`"
      class="post grid grid-cols-6 text-center p-4 shadow-lg rounded-lg bg-white text-grey-900 gap-4 border-b border-greyscale-300"
    >
      <TextLabel class="col-span-1">
        {{ post.id }}
      </TextLabel>
      <TextLabel class="truncate col-span-5 text-left md:col-span-2">
        {{ post.title }}
      </TextLabel>
      <p class="col-span-1 hidden md:table-cell">
        {{ post.UserId }}
      </p>
      <DateLabel
        class="col-span-1 hidden md:table-cell"
        :date="post.createdAt"
      />
      <DateLabel
        class="col-span-1 hidden md:table-cell"
        :date="post.updatedAt"
      />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import TextLabel from '~/components/common/Atoms/TextLabel.vue';
import DateLabel from '~/components/common/Molecules/DateLabel.vue';
import ListHeader from '~/components/common/Molecules/ListHeader.vue';

import type { IPost, ICPostHeader } from '~/types';

const props = defineProps<{
  posts: IPost[];
  increment: number;
  header: ICPostHeader[];
}>();

const currentIndex = ref(props.increment);

const visiblePosts = computed(() => props.posts.slice(0, currentIndex.value));

const postListRef = ref<null | HTMLElement>(null);

const checkScroll = () => {
  if (!postListRef.value) {
    return;
  }
  const { scrollTop, scrollHeight, clientHeight } = postListRef.value;
  if (scrollTop + clientHeight >= scrollHeight - 100) {
    if (currentIndex.value < props.posts.length) {
      currentIndex.value += props.increment;
    }
  }
};

onMounted(() => {
  postListRef.value = document.querySelector('.post-list');
});
</script>

<style scoped>
.post-list {
  max-height: 80vh;
}

.grid-cols-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.post {
  gap: 4;
  border-radius: 0.5rem;
  overflow: hidden;
}

h2,
p {
  margin: 0;
}

.bg-primary-500 {
  background-color: var(--primary-500);
}

.text-grey-900 {
  color: var(--greyscale-900);
}

.bg-white {
  background-color: var(--white);
}

.border-greyscale-300 {
  border-color: var(--greyscale-300);
}
</style>
