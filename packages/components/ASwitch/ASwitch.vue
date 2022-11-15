<script setup lang='ts'>
import { computed, ref } from 'vue'
import { BooleanProp, SizeProp, StringProp, VariantProp, useBaseProps } from '../composables'

const props = defineProps({
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
  disabled: BooleanProp,
  modelValue: BooleanProp,
  icon: StringProp,
  loading: BooleanProp,
  customIcon: BooleanProp,
})

const emits = defineEmits(['update:modelValue', 'click'])

const isDisabled = computed(() => props.loading || props.disabled)

const _value = ref(props.modelValue)

const clickHandler = (e: MouseEvent) => {
  e.stopPropagation()
  if (props.disabled)
    return
  _value.value = !_value.value
  emits('update:modelValue', _value.value)
}
</script>

<template>
  <div
    class="a-switch-base"
    :class="[`a-${color}`, `a-switch-${size}`, `a-${variant}`, { 'a-disabled': isDisabled }, cc]" :style="cs"
    @click="clickHandler"
  >
    <div class="a-switch-dot" :class="[`a-switch-dot-${size}`, { 'a-switch-checked': _value }]">
      <template v-if="_value">
        <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
        <div v-else class="i-carbon-checkmark animate-zoom-in animate-duration-200" :class="[`a-${variant}`, icon]" />
        <slot v-if="customIcon" name="icon" />
      </template>
    </div>
  </div>
</template>
