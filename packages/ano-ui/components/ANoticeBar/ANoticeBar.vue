<script setup lang="ts">
import { noticeBarEmits, noticeBarProps } from './notice-bar'
import { useNoticeBar } from './use-notice-bar'

const props = defineProps(noticeBarProps)
const emit = defineEmits(noticeBarEmits)

const { handleClose } = useNoticeBar(props, emit)
</script>

<template>
  <div
    v-if="show"
    class="box-border flex items-center justify-center gap-2 a-transition rounded-lg min-h-10 px-3"
    :class="[`a-${type}`, `a-${variant}`, customClass]" :style="customStyle"
  >
    <template v-if="$slots.icon">
      <slot name="icon" />
    </template>
    <div v-else-if="icon" :class="icon" />
    <div v-else-if="type === 'primary'" class="i-tabler-bell-filled" />
    <div v-else-if="type === 'success'" class="i-tabler-circle-check-filled" />
    <div v-else-if="type === 'info'" class="i-tabler-info-circle-filled" />
    <div v-else-if="type === 'warning'" class="i-tabler-alert-circle-filled" />
    <div v-else-if="type === 'danger'" class="i-tabler-circle-x-filled" />
    <div class="relative flex-1 overflow-hidden" :class="loop ? '' : 'truncate'">
      <template v-if="loop">
        <div class="text-transparent">
          blank
        </div>
        <div class="absolute a-notice-bar-words-loop whitespace-nowrap">
          <slot />
        </div>
      </template>
      <slot v-else />
    </div>
    <div v-if="showClose" class="i-tabler-x" @click.stop="handleClose" />
  </div>
</template>

<style scoped>
.a-notice-bar-words-loop {
  animation: 10s words-loop linear infinite normal;
}

@keyframes words-loop {
  0% {
    left: 100%;
    top: 0;
    bottom: 0;
  }

  100% {
    left: -100%;
    top: 0;
    bottom: 0;
  }
}
</style>
