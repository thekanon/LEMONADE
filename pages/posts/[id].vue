<template>
  <div>
    <PostDetail :post="post" :fetch-user="fetchUserInfo" />
    <CommentList :comments="comments" />
    <div ref="observerElement" class="observer-element"></div>
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types';
import CommentList from '@/components/common/Organisms/CommentList.vue';
import PostDetail from '@/components/common/Organisms/PostDetail.vue';

const route = useRoute();
const observerElement = ref(null);

if (process.client) {
  const observer = new IntersectionObserver(
    async ([entry]) => {
      if (entry.isIntersecting) {
        await fetchMoreComments();
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    },
  );

  onMounted(() => {
    console.log('mounted');
    // localStorage에 저장
    const postData = JSON.parse(JSON.stringify(post.value));
    saveRecentPost(postData);

    if (observerElement.value) {
      observer.observe(observerElement.value);
    }
  });

  onUnmounted(() => {
    if (observerElement.value) {
      observer.unobserve(observerElement.value);
    }
  });
}

const fetchMoreComments = async () => {
  // 더 많은 댓글을 가져오는 로직(지금은 더미)
  const { data: moreComments } = await useFetch(
    'https://koreanjson.com/comments?postId=' + route.params.id,
    {
      default: () => [],
    },
  );
  comments.value = [...comments.value, ...moreComments.value];
};

const { data: post } = await useFetch<IPost>(
  'https://koreanjson.com/posts/' + route.params.id,
  {
    default: () => [],
  },
);

const { data: comments } = await useFetch(
  'https://koreanjson.com/comments?postId=' + route.params.id,
  {
    default: () => [],
  },
);

const fetchUserInfo = async (userId: number) => {
  const { data: user } = await useFetch(
    'https://koreanjson.com/users/' + userId,
  );
  return user.value;
};
</script>
<style scoped></style>
