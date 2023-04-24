<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'

import { notifyEmits, notifyProps } from './notify'
import { useNotify } from './use-notify'

const props = defineProps(notifyProps)
const emit = defineEmits(notifyEmits)

const { showValue, notifyStatus, showNotify, closeNotify } = useNotify(props, emit)

defineExpose({ showNotify, closeNotify })

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
    :show="showValue" :name="animationName[notifyStatus?.position || 'default']" :duration="300"
    :cc="['a-notify-base', `a-notify-position-${notifyStatus.position}`, cc]" :cs="cs"
  >
    <div
      class="a-notify-content-base"
      :class="[`a-${notifyStatus.type}`, { 'rounded-none': notifyStatus.position === 'default' }, { 'justify-start': notifyStatus.showIcon }, ccc]"
      :style="ccs"
    >
      <template v-if="notifyStatus.customIcon">
        <slot name="icon" />
      </template>

      <template v-else-if="notifyStatus.showIcon">
        <div v-if="notifyStatus.type === 'primary'" class="i-tabler-info-circle-filled" />
        <div v-else-if="notifyStatus.type === 'success'" class="i-tabler-circle-check-filled" />
        <div v-else-if="notifyStatus.type === 'warning'" class="i-tabler-alert-circle-filled" />
        <div v-else-if="notifyStatus.type === 'danger'" class="i-tabler-circle-x-filled" />
      </template>
      <div class="flex-1" :class="{ 'text-center': !notifyStatus.showIcon && !notifyStatus.customIcon }">
        <template v-if="notifyStatus.message">
          {{ notifyStatus.message }}
        </template>
        <slot v-else />
      </div>
      <div v-if="notifyStatus.showIcon || notifyStatus.showClose" class="i-tabler-x" @click.stop="closeNotify" />
    </div>
  </ATransition>
</template>
