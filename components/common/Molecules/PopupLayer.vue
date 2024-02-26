<template>
  <div
    v-if="props.isPopupVisible"
    class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
    @click.self="close"
  >
    <div
      class="relative top-20 mx-auto p-5 border w-fit shadow-lg rounded-md bg-white"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isPopupVisible: Boolean,
});

const emit = defineEmits(['update:isPopupVisible', 'closePopup']);

function close() {
  console.log('close');
  emit('update:isPopupVisible', false);
}
</script>
