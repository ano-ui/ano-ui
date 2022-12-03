<script setup lang='ts'>
import { computed, nextTick, provide, reactive, toRefs } from 'vue'
import { CustomClassProp, CustomStyleProp } from '../composables'
import type { RadioGroupProps } from '../composables/radio'
import { radioGroupKey, radioGroupProps } from '../composables/radio'

const props = defineProps({
  cc: CustomClassProp,
  cs: CustomStyleProp,
  ...radioGroupProps,
})

const emits = defineEmits(['update:modelValue', 'change'])

const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emits('update:modelValue', value)
  nextTick(() => emits('change', value))
}

provide(radioGroupKey,
  reactive({
    ...toRefs(props),
    changeEvent,
  }),
)
</script>

<template>
  <div
    class="a-radio-group-base" :class="[cc]"
    :style="cs"
  >
    <slot />
  </div>
</template>
