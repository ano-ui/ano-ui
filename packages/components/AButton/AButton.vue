<script setup lang="ts">
import { computed } from 'vue'
import { BooleanProp, SizeProp, StringProp, VariantProp, useBaseProps } from '../composables'

const props = defineProps({
  ...useBaseProps(),
  size: SizeProp,
  variant: VariantProp,
  disabled: BooleanProp,
  icon: StringProp,
  iconOnly: BooleanProp,
  openType: StringProp,
  block: BooleanProp,
  loading: BooleanProp,
})

const emits = defineEmits(['click'])

const isDisabled = computed(() => props.loading || props.disabled)

const handleClick = (e: MouseEvent) => {
  if (isDisabled.value)
    return
  emits('click', e)
}
</script>

<template>
  <button
    class="a-button-base"
    :class="[`a-${color}`, { 'w-full': block }, `a-button-${size}`, { 'p1 aspect-square': iconOnly }, `a-${variant}`, { 'a-disabled': isDisabled }, cc]"
    :hover-class="isDisabled ? '' : (variant === 'text' ? 'a-button-text-hover' : 'a-button-hover')"
    :open-type="openType" :style="cs" @click="handleClick"
  >
    <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
    <div v-else-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
  </button>
</template>
