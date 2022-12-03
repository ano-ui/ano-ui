<script setup lang='ts'>
import { computed, inject } from 'vue'
import { BooleanProp, SizeProp, StringProp, VariantProp, useBaseProps } from '../composables'
import { radioGroupKey } from '../composables/radio'

const props = defineProps({
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
  disabled: BooleanProp,
  modelValue: BooleanProp,
  value: {
    type: [String, Number, Boolean],
    default: '',
  },
  label: StringProp,
  icon: StringProp,
  customIcon: BooleanProp,
})

const emits = defineEmits(['update:modelValue', 'click'])

const radioGroup = inject(radioGroupKey, undefined)
const isGroup = computed(() => !!radioGroup)
const size = computed(() => radioGroup?.size ?? props.size)
const disabled = computed(() => radioGroup?.disabled ?? props.disabled)
const modelValue = computed(() => isGroup.value ? radioGroup!.modelValue : props.modelValue)

const _checked = computed(() => isGroup.value ? radioGroup!.modelValue === props.value : props.modelValue)

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (disabled.value)
    return
  const newValue = typeof modelValue.value === 'string' ? props.value : !modelValue.value
  if (isGroup.value)
    radioGroup!.changeEvent(newValue)
  else
    emits('update:modelValue', newValue)

  emits('click', e)
}
</script>

<template>
  <div class="a-radio-base" :class="[`a-radio-${size}`, cc]" :style="cs">
    <div
      class="a-radio-radio-base"
      :class="[`a-radio-radio-${size}`, `a-${variant}`, _checked ? `a-${color}` : '', { 'a-disabled': disabled }, ccc]"
      :style="ccs" @click="clickHandler"
    >
      <div class="a-radio-radio-icon">
        <template v-if="_checked">
          <slot v-if="customIcon" name="icon" />
          <div v-else class="i-carbon-dot-mark animate-zoom-in animate-duration-200" :class="[icon]" />
        </template>
      </div>
    </div>
    <template v-if="label">
      {{ label }}
    </template>
    <slot v-else name="label" />
  </div>
</template>
