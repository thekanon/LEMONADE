<template>
  <div class="bg-white rounded-lg shadow-lg p-6 space-y-4">
    <div class="text-lg font-semibold text-gray-900">
      {{ props.userInfo.name }} 님의 회원정보
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="text-sm text-gray-600">NickName:</div>
      <div class="text-sm text-gray-900">{{ userInfo.username }}</div>

      <div class="text-sm text-gray-600">Email:</div>
      <div class="text-sm text-gray-900">{{ userInfo.email }}</div>

      <div class="text-sm text-gray-600">Phone:</div>
      <div class="text-sm text-gray-900">{{ userInfo.phone }}</div>

      <div class="text-sm text-gray-600">Website:</div>
      <div class="text-sm text-gray-900">{{ userInfo.website }}</div>

      <div class="text-sm text-gray-600">Province:</div>
      <div class="text-sm text-gray-900">{{ userInfo.province }}</div>

      <div class="text-sm text-gray-600">City:</div>
      <div class="text-sm text-gray-900">{{ userInfo.city }}</div>

      <div class="text-sm text-gray-600">District:</div>
      <div class="text-sm text-gray-900">{{ userInfo.district }}</div>

      <div class="text-sm text-gray-600">Street:</div>
      <div class="text-sm text-gray-900">{{ userInfo.street }}</div>

      <div class="text-sm text-gray-600">Zipcode:</div>
      <div class="text-sm text-gray-900">{{ userInfo.zipcode }}</div>

      <div class="text-sm text-gray-600">Created At:</div>
      <DateLabel :date="userInfo.createdAt" className="text-sm text-gray-600" />

      <div class="text-sm text-gray-600">Updated At:</div>
      <DateLabel :date="userInfo.updatedAt" className="text-sm text-gray-600" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DateLabel from '@/components/common/Molecules/DateLabel.vue';
import type { IUserInfo } from '@/types';
const props = defineProps<{
  userInfo: IUserInfo;
}>();
</script>
<style scoped></style>
