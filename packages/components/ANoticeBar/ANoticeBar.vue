<script setup lang="ts">
import { BooleanProp, BooleanTrueProp, StringProp, VariantProp, useBaseProps } from '../composables'
import { noticeBarEmits, noticeBarProps } from './notice-bar'
import { useNoticeBar } from './use-notice-bar'

const props = defineProps(noticeBarProps)
const emit = defineEmits(noticeBarEmits)

const { handleClose } = useNoticeBar(props, emit)
</script>

<template>
  <div v-if="show" class="a-notice-bar-base" :class="[`a-${color}`, `a-${variant}`, cc]" :style="cs">
    <div class="i-carbon-notification-filled" />
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <div class="flex-1 relative overflow-hidden" :class="loop ? '' : 'truncate'">
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
    <div v-if="showClose" class="i-carbon-close" @click.stop="handleClose" />
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
