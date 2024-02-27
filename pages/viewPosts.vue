<template>
  <div>
    <div v-if="postDataList.length > 0" class="carousel-container">
      <Carousel>
        <Slide v-for="post in postDataList" :key="post.id">
          <PostDetail :post="post" />
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>

    <PostList :posts="posts" :increment="20" :header="header" />
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types';
import PostList from '@/components/common/Organisms/PostList.vue';
import PostDetail from '@/components/common/Organisms/PostDetail.vue';

const postDataList = ref<IPost[]>([]);

const { data: posts } = await useFetch<IPost[]>(
  'https://koreanjson.com/posts',
  {
    default: () => [],
  },
);

const header = [
  { text: '글 번호', id: 1 },
  { text: '글 제목', className: 'col-span-5 md:col-span-2', id: 2 },
  { text: '유저 ID', className: 'hidden md:table-cell', id: 3 },
  { text: '작성일', className: 'hidden md:table-cell', id: 4 },
  { text: '수정일', className: 'hidden md:table-cell', id: 5 },
];

if (process.client) {
  postDataList.value = loadRecentPosts();
}
</script>

<style>
.carousel-container {
}
.carousel__item {
}

.carousel__slide {
  height: 100%;
}

.carousel__prev,
.carousel__next {
}
</style>
