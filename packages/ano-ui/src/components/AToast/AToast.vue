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
    <template v-if="state?.message">
      {{ state.message }}
    </template>
    <slot v-else />
  </ATransition>
</template>
