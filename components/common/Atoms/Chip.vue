<template>
  <div :class="chipClasses">
    <nuxt-link v-if="link" :to="link" class="chip-link">
      <span class="chip-label">{{ label }}</span>
    </nuxt-link>
    <span v-else class="chip-label">{{ label }}</span>
    <button v-if="isClosed" class="chip-close" @click="closeChip">
      &times;
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'blue',
  },
  link: {
    type: String,
    default: '',
  },
  isClosable: {
    type: Boolean,
    default: false,
  },
});

const isClosed = ref(false);
const chipClasses = computed(() => [
  `ml-2 bg-${props.color}-100 text-${props.color}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded cursor-pointer`,
]);

function closeChip() {
  isClosed.value = true;
}
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 16px;
  padding: 4px 8px;
  margin-right: 8px;
}

.chip-label {
  margin-right: 4px;
}

.chip-close {
  background: none;
  border: none;
  color: #757575;
  cursor: pointer;
  font-size: 14px;
  margin-left: 4px;
}

.chip-link {
  text-decoration: none;
  color: inherit;
}

.chip-color-default {
  background-color: #e0e0e0;
}

.chip-color-primary {
  background-color: #2196f3;
  color: #fff;
}

.chip-color-secondary {
  background-color: #f44336;
  color: #fff;
}
</style>
