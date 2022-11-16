<script setup lang='ts'>
import { computed, ref, watch } from 'vue'
import { BooleanProp, SizeProp, StringProp, VariantProp, useBaseProps } from '../composables'

const props = defineProps({
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
  disabled: BooleanProp,
  modelValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true,
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false,
  },
  icon: StringProp,
  loading: BooleanProp,
  customIcon: BooleanProp,
})

const emits = defineEmits(['update:modelValue', 'click'])

const isDisabled = computed(() => props.loading || props.disabled)

const _value = ref(props.modelValue)

const _checked = computed(() => props.modelValue === props.activeValue)

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (props.disabled)
    return
  _value.value = _value.value === props.activeValue ? props.inactiveValue : props.activeValue
  emits('update:modelValue', _value.value)
  emits('click', e)
}
</script>

<template>
  <div
    class="a-switch-base"
    :class="[`a-switch-${size}`, `a-${variant}`, _checked ? `a-${color}` : '', { 'a-disabled': isDisabled }, cc]" :style="cs"
    @click="clickHandler"
  >
    <div class="a-switch-dot" :class="[`a-switch-dot-${size}`, variant === 'solid' ? 'bg-white text-context' : 'bg-context text-white', { 'a-switch-dot-checked': _checked }]">
      <template v-if="_checked">
        <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
        <slot v-else-if="customIcon" name="icon" />
        <div v-else class="i-carbon-checkmark animate-zoom-in animate-duration-200" :class="[icon]" />
      </template>
    </div>
  </div>
</template>
