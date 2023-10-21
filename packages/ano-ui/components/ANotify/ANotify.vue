<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'

import { notifyEmits, notifyProps } from './notify'
import { useNotify } from './use-notify'

const props = defineProps(notifyProps)
const emit = defineEmits(notifyEmits)

const { visible, state, classes, show, close } = useNotify(props, emit)

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
    :custom-class="['fixed z-500', classes, customClass]" :custom-style="customStyle"
  >
    <div
      class="box-border flex items-center justify-center gap-2 text-base min-h-10 px-3 a-solid"
      :class="[`a-${state.type}`, state.position === 'default' ? 'rounded-none' : 'rounded-lg', { 'justify-start': state.showIcon }, ccc]"
      :style="ccs"
    >
      <slot name="icon">
        <template v-if="state.showIcon">
          <div v-if="state.type === 'primary'" class="i-tabler-info-circle-filled" />
          <div v-else-if="state.type === 'success'" class="i-tabler-circle-check-filled" />
          <div v-else-if="state.type === 'warning'" class="i-tabler-alert-circle-filled" />
          <div v-else-if="state.type === 'danger'" class="i-tabler-circle-x-filled" />
        </template>
      </slot>

      <div class="flex-1" :class="{ 'text-center': !state.showIcon && !$slots.icon }">
        <slot>
          {{ state.message }}
        </slot>
      </div>
      <div v-if="state.showIcon || state.showClose" class="i-tabler-x" @click.stop="close" />
    </div>
  </ATransition>
</template>

<style scoped>
</style>
