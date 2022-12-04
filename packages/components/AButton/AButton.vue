<script setup lang="ts">
import { buttonEmits, buttonProps } from './button'
import { useButton } from './use-button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { disabled, handleClick } = useButton(props, emit)
</script>

<template>
  <button
    class="a-button-base"
    :class="[`a-${color}`, { 'w-full': block }, `a-button-${size}`, { 'a-button-icon': iconOnly }, `a-${variant}`, { 'a-disabled': disabled }, cc]"
    :hover-class="disabled ? '' : (variant === 'text' ? 'a-button-text-hover' : 'a-button-hover')" :open-type="openType"
    :style="cs" @click="handleClick"
  >
    <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
    <div v-else-if="icon" :class="[icon]" />
    <slot v-else name="icon" />
    <slot />
  </button>
</template>
