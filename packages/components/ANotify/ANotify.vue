<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'

import { notifyEmits, notifyProps } from './notify'
import { useNotify } from './use-notify'

const props = defineProps(notifyProps)
const emit = defineEmits(notifyEmits)

const { show, notifyStatus, showNotify, handleClose } = useNotify(props, emit)

defineExpose({ showNotify })

const animationName = {
  'default': 'slide-down',
  'top': 'slide-down',
  'top-left': 'slide-left',
  'top-right': 'slide-right',
  'bottom': 'slide-up',
  'bottom-left': 'slide-left',
  'bottom-right': 'slide-right',
}
</script>

<template>
  <ATransition
    :show="show" :name="animationName[notifyStatus.position]" :duration="300"
    :cc="['a-notify-base', `a-notify-position-${notifyStatus.position}`]"
  >
    <div
      class="a-notify-content-base"
      :class="[`a-${notifyStatus.color}`, `a-${variant}`, { 'rounded-none': notifyStatus.position === 'default' }, { 'justify-start': notifyStatus.showIcon }, cc]"
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
  </ATransition>
</template>
