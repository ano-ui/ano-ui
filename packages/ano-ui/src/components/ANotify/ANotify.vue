<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'

import { notifyEmits, notifyProps } from './notify'
import { useNotify } from './use-notify'

const props = defineProps(notifyProps)
const emit = defineEmits(notifyEmits)

const { visible, state, show, close } = useNotify(props, emit)

defineExpose({ show, close })

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
    :show="visible" :name="animationName[state?.position || 'default']" :duration="300"
    :cc="['a-notify-base', `a-notify-position-${state.position}`, cc]" :cs="cs"
  >
    <div
      class="a-notify-content-base"
      :class="[`a-${state.type}`, { 'rounded-none': state.position === 'default' }, { 'justify-start': state.showIcon }, ccc]"
      :style="ccs"
    >
      <template v-if="state.customIcon">
        <slot name="icon" />
      </template>

      <template v-else-if="state.showIcon">
        <div v-if="state.type === 'primary'" class="i-tabler-info-circle-filled" />
        <div v-else-if="state.type === 'success'" class="i-tabler-circle-check-filled" />
        <div v-else-if="state.type === 'warning'" class="i-tabler-alert-circle-filled" />
        <div v-else-if="state.type === 'danger'" class="i-tabler-circle-x-filled" />
      </template>
      <div class="flex-1" :class="{ 'text-center': !state.showIcon && !state.customIcon }">
        <template v-if="state.message">
          {{ state.message }}
        </template>
        <slot v-else />
      </div>
      <div v-if="state.showIcon || state.showClose" class="i-tabler-x" @click.stop="close" />
    </div>
  </ATransition>
</template>
