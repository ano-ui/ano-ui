<script setup lang="ts">
import ATransition from '../ATransition/ATransition.vue'

import { toastEmits, toastProps } from './toast'
import { useToast } from './use-toast'

const props = defineProps(toastProps)
const emit = defineEmits(toastEmits)

const { show, toastStatus, showToast, closeToast } = useToast(props, emit)

defineExpose({ showToast, closeToast })
</script>

<template>
  <ATransition
    :show="show" name="fade" :duration="300"
    :cc="['a-toast-base', `a-toast-position-${toastStatus?.position}`, cc]" :cs="cs"
  >
    <template v-if="toastStatus?.message">
      {{ toastStatus.message }}
    </template>
    <slot v-else />
  </ATransition>
</template>
