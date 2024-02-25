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
    <div class="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div class="text-lg font-semibold text-gray-900">
        {{ userInfo?.name }} 님의 회원정보
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-sm text-gray-600">NickName:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.username }}</div>

        <div class="text-sm text-gray-600">Email:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.email }}</div>

        <div class="text-sm text-gray-600">Phone:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.phone }}</div>

        <div class="text-sm text-gray-600">Website:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.website }}</div>

        <div class="text-sm text-gray-600">Province:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.province }}</div>

        <div class="text-sm text-gray-600">City:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.city }}</div>

        <div class="text-sm text-gray-600">District:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.district }}</div>

        <div class="text-sm text-gray-600">Street:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.street }}</div>

        <div class="text-sm text-gray-600">Zipcode:</div>
        <div class="text-sm text-gray-900">{{ userInfo?.zipcode }}</div>

        <div class="text-sm text-gray-600">Created At:</div>
        <DateLabel
          :date="userInfo?.createdAt"
          className="text-sm text-gray-600"
        />

        <div class="text-sm text-gray-600">Updated At:</div>
        <DateLabel
          :date="userInfo?.updatedAt"
          className="text-sm text-gray-600"
        />
      </div>
    </div>
  </PopupLayer>
</template>

<script setup lang="ts">
import type { IPost, IUserInfo } from '@/types';
import Chip from '@/components/common/Atoms/Chip.vue';
import TextLabel from '@/components/common/Atoms/TextLabel.vue';
import DateLabel from '@/components/common/Molecules/DateLabel.vue';
import PopupLayer from '@/components/common/Molecules/PopupLayer.vue';
import UserInfoForm from '@/components/container/UserInfoForm.vue';
const props = defineProps({
  post: {
    type: Object as PropType<IPost>,
    required: true,
  },
  fetchUser: {
    type: Function as PropType<(userId: number) => IUserInfo>,
    required: true,
  },
});

const isPopupVisible = ref(false);
const userInfo = ref<null | IUserInfo>(null);

const onClickHandle = async (userId: number) => {
  const user = await props.fetchUser(userId);

  if (user) {
    console.log(JSON.stringify(user, null, 2));
    userInfo.value = user;
  }

  isPopupVisible.value = true;
  console.log('onClickHandle');
};
const closePopup = () => {
  console.log('closePopup, isPopupVisible: ', isPopupVisible.value);
  isPopupVisible.value = false;
};
</script>

<style scoped>
.chip {
  /* cursor: pointer; */
}
</style>
