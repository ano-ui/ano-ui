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
      <div v-if="state?.type === 'success'" class="mr-2 i-tabler-circle-check-filled" />
      <div v-else-if="state?.type === 'warning'" class="mr-2 i-tabler-alert-circle-filled" />
      <div v-else-if="state?.type === 'danger'" class="mr-2 i-tabler-circle-x-filled" />
      <div v-else-if="state?.type === 'loading'" class="mr-2 animate-spin mr-1 i-tabler-loader-3" />
    </slot>
    <template v-if="state?.message">
      {{ state.message }}
    </template>
    <slot v-else />
  </ATransition>
</template>
