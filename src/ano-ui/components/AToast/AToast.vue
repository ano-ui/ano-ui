<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'

import { toastEmits, toastProps } from './toast'
import { useToast } from './use-toast'

const props = defineProps(toastProps)
const emit = defineEmits(toastEmits)

const { visible, state, show, close, classes } = useToast(props, emit)

defineExpose({ show, close })
</script>

<template>
  <ATransition
    :show="visible" name="fade" :duration="300"
    :cc="['fixed z-500 flex justify-center items-center min-w-20 max-w-70% px-4 py-2 rounded-lg bg-black/70 text-white text-base text-center',
          classes, cc]" :cs="cs"
  >
    <slot name="icon">
      <div v-if="state?.type === 'success'" class="i-tabler-circle-check-filled mr-2" />
      <div v-else-if="state?.type === 'warning'" class="i-tabler-alert-circle-filled mr-2" />
      <div v-else-if="state?.type === 'danger'" class="i-tabler-circle-x-filled mr-2" />
      <div v-else-if="state?.type === 'loading'" class="i-tabler-loader mr-1 mr-2 animate-spin" />
    </slot>
    <template v-if="state?.message">
      {{ state.message }}
    </template>
    <slot v-else />
  </ATransition>
</template>

<style scoped>
</style>
