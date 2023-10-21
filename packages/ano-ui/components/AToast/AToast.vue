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
    :custom-class="['fixed z-500 flex justify-center items-center min-w-20 max-w-70% px-4 py-2 rounded-lg bg-black/70 text-white text-base text-center',
                    classes, customClass]" :custom-style="customStyle"
  >
    <slot name="icon">
      <div v-if="state?.type === 'success'" class="i-tabler-circle-check-filled mr-2" />
      <div v-else-if="state?.type === 'warning'" class="mr-2 i-tabler-alert-circle-filled" />
      <div v-else-if="state?.type === 'danger'" class="mr-2 i-tabler-circle-x-filled" />
      <div v-else-if="state?.type === 'loading'" class="i-tabler-loader mr-2 animate-spin mr-1" />
    </slot>
    <template v-if="state?.message">
      {{ state.message }}
    </template>
    <slot v-else />
  </ATransition>
</template>

<style scoped></style>
