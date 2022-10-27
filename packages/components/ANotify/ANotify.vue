<script setup lang="ts">
import { ref } from 'vue'
import { CCProp, CSProp, VariantProp } from '../composables/useProps'
import type { NotifyOptions } from './types'

defineProps({
  cc: CCProp,
  cs: CSProp,
  variant: VariantProp,
})

const emits = defineEmits(['close'])

const timer = ref()

const _show = ref(false)

const notifyStatus = ref<NotifyOptions>({
  color: 'primary',
  position: 'default',
  content: '',
  duration: 3000,
  showIcon: false,
  customIcon: false,
  showClose: false,
})

const showNotify = (options?: NotifyOptions) => {
  const { color, position, duration, content, showIcon, customIcon, showClose } = options || {}
  _show.value = true
  notifyStatus.value = {
    color: color || 'primary',
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

defineExpose({ showNotify })

function closeNotify() {
  if (timer.value)
    clearTimeout(timer.value)
  _show.value = false
}

const handleClose = (e: Event) => {
  closeNotify()
  emits('close', e)
}
</script>

<template>
  <div
    v-if="_show" class="a-notify-base"
    :class="[`a-${notifyStatus.color}`, `a-${variant}`, { 'justify-start': notifyStatus.showIcon }, `a-notify-position-${notifyStatus.position}`, cc]"
    :style="cs"
  >
    <template v-if="notifyStatus.customIcon">
      <slot name="icon" />
    </template>

    <template v-else-if="notifyStatus.showIcon">
      <div v-if="notifyStatus.color === 'primary'" class="i-carbon-notification-filled" />
      <div v-else-if="notifyStatus.color === 'success'" class="i-carbon-checkmark-filled" />
      <div v-else-if="notifyStatus.color === 'info'" class="i-carbon-information-filled" />
      <div v-else-if="notifyStatus.color === 'warning'" class="i-carbon-warning-filled" />
      <div v-else-if="notifyStatus.color === 'danger'" class="i-carbon-error-filled" />
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

