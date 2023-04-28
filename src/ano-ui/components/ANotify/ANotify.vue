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
    :cc="['fixed z-500', `a-notify-position-${state.position}`, cc]" :cs="cs"
  >
    <div
      class="box-border min-h-10 flex items-center justify-center gap-2 rounded-lg px-3 text-base a-transition a-solid"
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

<style scoped>
.a-notify-position-default {
  --at-apply: 'top-0 left-0 right-0'
}

.a-notify-position-top {
  --at-apply: 'top-0 left-5 right-5 pt-5'
}

.a-notify-position-top-left {
  --at-apply: 'top-0 left-0 pt-5 pl-5'
}

.a-notify-position-top-right {
  --at-apply: 'top-0 right-0 pt-5 pr-5'
}

.a-notify-position-bottom {
  --at-apply: '!top-auto bottom-0 left-5 right-5 mb-safe pb-5'
}

.a-notify-position-bottom-left {
  --at-apply: '!top-auto bottom-5 left-5 mb-safe pl-5'
}

.a-notify-position-bottom-right {
  --at-apply: '!top-auto bottom-5 right-5 mb-safe pr-5'
}

.a-notify-content-base {
  --at-apply: 'box-border flex justify-center gap-2 items-center rounded-lg bg-clip-padding a-transition px-3 min-h-10 text-base a-solid'
}
</style>
