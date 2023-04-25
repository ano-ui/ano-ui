<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'

import { toastEmits, toastProps } from './toast'
import { useToast } from './use-toast'

const props = defineProps(toastProps)
const emit = defineEmits(toastEmits)

const { visible, state, show, close } = useToast(props, emit)

defineExpose({ show, close })
</script>

<template>
  <ATransition
    :show="visible" name="fade" :duration="300"
    :cc="['a-toast-base', `a-toast-position-${state?.position}`, cc]" :cs="cs"
  >
    <slot name="icon">
      <div v-if="state?.type === 'success'" class="i-tabler-circle-check-filled mr-2" />
      <div v-else-if="state?.type === 'warning'" class="i-tabler-alert-circle-filled mr-2" />
      <div v-else-if="state?.type === 'danger'" class="i-tabler-circle-x-filled mr-2" />
      <div v-else-if="state?.type === 'loading'" class="i-tabler-loader-3 mr-1 mr-2 animate-spin" />
    </slot>
    <template v-if="state?.message">
      {{ state.message }}
    </template>
    <slot v-else />
  </ATransition>
</template>
