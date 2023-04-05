<script setup lang='ts'>
import { nextTick, provide, reactive, toRefs } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { radioGroupKey } from '../tokens'
import type { RadioGroupProps } from './radio-group'
import { radioGroupEmits, radioGroupProps } from './radio-group'

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

function changeEvent(value: RadioGroupProps['modelValue']) {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => emit(CHANGE_EVENT, value))
}

provide(radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent,
  }),
)
</script>

<template>
  <div :class="[`a-radio-group-${direction}`, cc]" :style="cs">
    <slot />
  </div>
</template>
