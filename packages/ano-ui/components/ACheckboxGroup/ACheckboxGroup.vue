<script setup lang='ts'>
import { nextTick, provide, reactive, toRefs } from 'vue'
import type { CheckboxValueType } from '../ACheckbox/checkbox'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { checkboxGroupKey } from '../tokens'
import { checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)

function changeEvent(value: CheckboxValueType[]) {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => emit(CHANGE_EVENT, value))
}

provide(checkboxGroupKey, reactive({
  ...toRefs(props),
  changeEvent,
}))
</script>

<template>
  <div
    class="flex gap-2 flex-wrap"
    :class="[direction === 'horizontal' ? '' : 'flex-col', customClass]"
    :style="customStyle"
  >
    <slot />
  </div>
</template>

<style scoped>
</style>
