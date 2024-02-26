<template>
  <div>
    <Carousel :items-to-show="2.5">
      <Slide v-for="slide in 10" :key="slide">
        <PostDetail :post="post" />
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>

    <PostList :posts="posts" :increment="20" :header="header" />
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types';
import PostList from '@/components/common/Organisms/PostList.vue';
import PostDetail from '@/components/common/Organisms/PostDetail.vue';

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

const post: IPost = {
  id: 1,
  title: '제목',
  content: '내용',
  createdAt: '2021-10-10T00:00:00.000Z',
  updatedAt: '2021-10-10T00:00:00.000Z',
  UserId: 1,
};
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
