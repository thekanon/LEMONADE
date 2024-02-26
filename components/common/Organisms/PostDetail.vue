<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div
      class="px-4 py-5 sm:px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center"
    >
      <div>
        <div>
          <TextLabel class="text-sm font-semibold text-gray-600"
            >제목</TextLabel
          >
        </div>
        <TextLabel class="mt-1 text-lg leading-6 font-medium text-gray-900">
          {{ post.title }}
        </TextLabel>
        <div class="mt-2 flex items-center">
          <TextLabel class="text-sm text-gray-500"
            >글 ID: {{ post.id }} |</TextLabel
          >
          <Chip
            :label="`유저 ID : ${post.UserId}`"
            :color="'blue'"
            @click="onClickHandle(post.UserId)"
          />
        </div>
      </div>
      <div class="text-sm text-gray-500 mt-4 sm:mt-0">
        <p>
          작성일:
          <DateLabel :date="post.createdAt" />
        </p>
        <p>
          수정일:
          <DateLabel :date="post.updatedAt" />
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:gap-4 sm:px-6">
          <TextLabel class="text-sm font-semibold text-gray-600"
            >내용</TextLabel
          >
          <dd class="mt-1 text-sm text-gray-900">
            {{ post.content }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <PopupLayer
    :isPopupVisible="isPopupVisible"
    @update:isPopupVisible="closePopup"
  >
    <UserInfoForm v-if="userInfo" :userInfo="userInfo" />
  </PopupLayer>
</template>

<script setup lang="ts">
import type { IPost, IUserInfo } from '@/types';
import Chip from '@/components/common/Atoms/Chip.vue';
import TextLabel from '@/components/common/Atoms/TextLabel.vue';
import DateLabel from '@/components/common/Molecules/DateLabel.vue';
import PopupLayer from '@/components/common/Molecules/PopupLayer.vue';
import UserInfoForm from '@/components/container/UserInfoForm.vue';

const props = defineProps<{
  post: IPost;
  fetchUser: (userId: number) => IUserInfo;
}>();

const isPopupVisible = ref(false);
const router = useRouter();
const userInfo = ref<IUserInfo | null>(null);

router.beforeEach((to, _, next) => {
  console.log('to.query.userId', to.query);
  if (to.query.userInfoPopup === undefined) {
    isPopupVisible.value = false;
  }
  next();
});

const onClickHandle = async (userId: number) => {
  const router = useRouter();

  if (userInfo.value === null) {
    const user = await props.fetchUser(userId);
    if (user) {
      console.log(JSON.stringify(user, null, 2));
      userInfo.value = user;
    }
  }
  router.push({
    query: {
      ...router.currentRoute.value.query,
      userInfoPopup: userId.toString(),
    },
  });

  isPopupVisible.value = true;
};
const closePopup = () => {
  const router = useRouter();
  isPopupVisible.value = false;
  const { ...restQuery } = router.currentRoute.value.query;
  router.push({ query: restQuery });
};
</script>

<style scoped>
.chip {
  /* cursor: pointer; */
}
</style>
