<script setup lang="ts">
import { ref } from 'vue'
import { ccProp, variantProp } from '../composables/useProps'
import type { NotifyOptions } from './types'

defineProps({
  cc: ccProp,
  variant: variantProp,
})

const emits = defineEmits(['close'])

const timer = ref()

const show = ref(false)

const notifyStatus = ref<NotifyOptions>({
  type: 'primary',
  position: 'default',
  content: '',
  duration: 3000,
  showIcon: false,
  customIcon: false,
  showClose: false,
})

const showNotify = (options?: NotifyOptions) => {
  const { type, position, duration, content, showIcon, customIcon, showClose } = options || {}
  show.value = true
  notifyStatus.value = {
    type: type || 'primary',
    position: position || 'default',
    duration: duration || 3000,
    content: content || '',
    showIcon: showIcon || false,
    customIcon: customIcon || false,
    showClose: showClose || false,
  }

  if (timer.value)
    clearTimeout(timer.value)

  timer.value = setTimeout(() => {
    closeNotify()
  }, notifyStatus.value.duration)
}

defineExpose({
  showNotify,
})

function closeNotify() {
  if (timer.value)
    clearTimeout(timer.value)
  show.value = false
}

const handleClose = (e: Event) => {
  closeNotify()
  emits('close', e)
}
</script>

<template>
  <div
    v-if="show" class="a-notify-base"
    :class="[`a-${notifyStatus.type}`, `a-${variant}`, { 'justify-start': notifyStatus.showIcon }, `a-notify-position-${notifyStatus.position}`, cc]"
  >
    <template v-if="notifyStatus.customIcon">
      <slot name="icon" />
    </template>

    <template v-else-if="notifyStatus.showIcon">
      <div v-if="notifyStatus.type === 'primary'" class="i-carbon-notification-filled" />
      <div v-else-if="notifyStatus.type === 'success'" class="i-carbon-checkmark-filled" />
      <div v-else-if="notifyStatus.type === 'info'" class="i-carbon-information-filled" />
      <div v-else-if="notifyStatus.type === 'warning'" class="i-carbon-warning-filled" />
      <div v-else-if="notifyStatus.type === 'danger'" class="i-carbon-error-filled" />
    </template>
    <div class="flex-1" :class="{ 'text-center': !notifyStatus.showIcon && !notifyStatus.customIcon }">
      <template v-if="notifyStatus.content">
        {{ notifyStatus.content }}
      </template>
      <slot v-else />
    </div>
    <div v-if="notifyStatus.showIcon || notifyStatus.showClose" class="i-carbon-close" @click.stop="handleClose" />
  </div>
</template>

