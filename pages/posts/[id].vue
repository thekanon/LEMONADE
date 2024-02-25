<template>
  <div>
    <PostDetail :post="post" :fetchUser="fetchUserInfo" />
  </div>
</template>

<script setup lang="ts">
import type { IPost } from '@/types';
import PostDetail from '@/components/common/Organisms/PostDetail.vue';

const route = useRoute();

const { data: post } = await useFetch<IPost>(
  'https://koreanjson.com/posts/' + route.params.id,
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
