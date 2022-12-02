<script setup lang='ts'>
import type { PropType } from 'vue'
import { computed, provide } from 'vue'
import { BooleanProp, BooleanTrueProp, CustomClassProp, CustomStyleProp, SizeProp } from '../composables'
import type { CheckboxGroupContext, CheckboxValueType } from '../composables/checkbox'
import { checkboxGroupContextKey } from '../composables/checkbox'

const props = defineProps({
  cc: CustomClassProp,
  cs: CustomStyleProp,
  divider: BooleanProp,
  card: BooleanTrueProp,
  modelValue: {
    type: Array as PropType<CheckboxValueType[]>,
    default: () => [],
  },
  size: SizeProp,
  min: {
    type: Number,
    default: -1,
  },
  max: {
    type: Number,
    default: -1,
  },
  disabled: BooleanProp,
})

defineEmits(['update:modelValue', 'change'])

const _modelValue = computed(() => props.modelValue ?? [])

provide<CheckboxGroupContext>(checkboxGroupContextKey, {
  isGroup: true,
  groupValue: _modelValue.value,
  size: props.size,
  min: props.min,
  max: props.max,
  disabled: props.disabled,
})
</script>

<template>
  <div
    class="a-checkbox-group-base" :class="[cc]"
    :style="cs"
  >
    <slot />
  </div>
</template>
