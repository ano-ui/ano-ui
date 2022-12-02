<script setup lang='ts'>
import { computed } from 'vue'
import { BooleanProp, SizeProp, StringProp, VariantProp, useBaseProps } from '../composables'

const props = defineProps({
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
  disabled: BooleanProp,
  modelValue: BooleanProp,
  value: {
    type: [Boolean, String, Number],
    default: true,
  },
  label: StringProp,
  icon: StringProp,
  loading: BooleanProp,
  customIcon: BooleanProp,
})

const emits = defineEmits(['update:modelValue', 'click'])

const _checked = computed(() => props.modelValue ?? false)

const isDisabled = computed(() => props.loading || props.disabled)

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (isDisabled.value)
    return
  emits('update:modelValue', !_checked.value)
  emits('click', e)
}
</script>

<template>
  <div class="a-checkbox-base" :class="[`a-checkbox-${size}`, cc]" :style="cs">
    <div
      class="a-checkbox-checkbox-base"
      :class="[`a-checkbox-checkbox-${size}`, `a-${variant}`, _checked ? `a-${color}` : '', { 'a-disabled': isDisabled }, ccc]"
      :style="ccs" @click="clickHandler"
    >
      <div v-if="(loading && !_checked)" class="i-carbon-circle-dash animate-spin" />
      <template v-if="_checked">
        <slot v-if="customIcon" name="icon" />
        <div v-else class="i-carbon-checkmark animate-zoom-in animate-duration-200" :class="[icon]" />
      </template>
    </div>
    <template v-if="label">
      {{ label }}
    </template>
    <slot v-else name="label" />
  </div>
</template>
