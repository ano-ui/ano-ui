<script setup lang="ts">
import { buttonEmits, buttonProps } from './button'
import { useButton } from './use-button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { disabled, clickHandler } = useButton(props, emit)
</script>

<template>
  <button
    class="a-button-wrapper-reset box-border flex items-center justify-center gap-2 text-center a-transition"
    :class="[`a-${type}`, `a-button-${size}`, `a-${variant}`, block ? 'block' : 'inline-block',
             round ? 'rounded-full' : square ? 'rounded-none' : 'rounded-lg', disabled ? 'op-50' : '', cc]"
    :hover-class="disabled ? '' : '!before:op10'" :open-type="openType" :style="cs"
    @click="clickHandler"
  >
    <div v-if="loading" class="i-tabler-loader animate-spin" />
    <div v-else-if="icon" :class="[icon]" />
    <slot />
  </button>
</template>

<style scoped>
.a-button-wrapper-reset {
  --at-apply: 'after:display-none before:content-none before:absolute before:inset-0 before:bg-black before:op0'
}

.a-button-mini {
  --at-apply: 'h-7.5 px2.5 text-xs'
}

.a-button-small {
  --at-apply: 'h-9.5 px3.5 text-sm'
}

.a-button-normal {
  --at-apply: 'h-11 px4.5 text-base'
}

.a-button-large {
  --at-apply: 'h-12.5 px5.5 text-lg'
}
</style>
