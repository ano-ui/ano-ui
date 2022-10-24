<script setup lang="ts">
import { computed } from 'vue'
import { useBaseProps } from '../composables/useLayer'
import { disabledProp, iconOnlyProp, iconProp, sizeProp, variantProp } from '../composables/useProps'

const props = defineProps({
  ...useBaseProps(),
  size: sizeProp,
  variant: variantProp,
  disabled: disabledProp,
  icon: iconProp,
  iconOnly: iconOnlyProp,
  openType: String,
  block: Boolean,
  loading: Boolean,
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
    class="a-button-base" :class="[`a-${color}`, { 'w-full': block }, `a-button-${size}`, { 'p1 aspect-square': iconOnly }, `a-${variant}`, { 'a-disabled': isDisabled }, cc]"
    :hover-class="isDisabled ? '' : (variant === 'text' ? 'a-button-text-hover' : 'a-button-hover')" :open-type="openType" @click="handleClick"
  >
    <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
    <div v-else-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
  </button>
</template>
