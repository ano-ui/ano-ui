<script setup lang="ts">
import { buttonEmits, buttonProps } from './button'
import { useButton } from './use-button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { disabled, clickHandler } = useButton(props, emit)
</script>

<template>
  <button
    class="a-button-wrapper-base"
    :class="[`a-${type}`, { block }, `a-button-${size}`, { 'a-button-icon': iconOnly }, `a-${variant}`, { 'a-disabled': disabled }, cc]"
    :hover-class="disabled ? '' : 'a-button-hover'" hover-stay-time="100" :open-type="openType" :style="cs"
    @click="clickHandler"
  >
    <div class="a-button-content-base">
      <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
      <div v-else-if="icon" class="mr-1" :class="[icon]" />
      <slot />
    </div>
  </button>
</template>
