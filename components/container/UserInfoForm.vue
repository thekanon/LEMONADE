<template>
  <div>
    <h2>User Info</h2>
    <div>
      <div>
        <span>{{ userInfo.email }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IUserInfo } from '@/types';
const props = defineProps({
  userInfo: {
    type: Object as PropType<IUserInfo>,
    required: true,
  },
});

onMounted(() => {
  console.log(props.userInfo.value.email);
});
</script>
<style scoped></style>
