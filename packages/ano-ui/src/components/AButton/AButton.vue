<script setup lang="ts">
import { buttonEmits, buttonProps } from './button'
import { useButton } from './use-button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { disabled, clickHandler } = useButton(props, emit)
</script>

<template>
  <button
    class="a-button-wrapper-reset m-0 box-border flex items-center justify-center gap-2 rounded text-center"
    :class="[`a-${type}`, `a-button-${size}`, `a-${variant}`, block ? 'block' : 'inline-block', disabled ? 'op-50' : '', cc]"
    :hover-class="disabled ? '' : '!before:op10'" :open-type="openType" :style="cs" @click="clickHandler"
  >
    <div v-if="loading" class="i-tabler-loader animate-spin" />
    <template v-else>
      <slot name="icon">
        <div v-if="icon" :class="icon" />
      </slot>
    </template>
    <slot />
  </button>
</template>

<style scoped>
.a-button-wrapper-reset {
  --at-apply: 'after:display-none before:content-none before:absolute before:inset-0 before:bg-black before:op0'
}

.a-button-mini {
  --at-apply: 'h-6 px-1 text-xs'
}

.a-button-small {
  --at-apply: 'h-8 px-2 text-sm'
}

.a-button-normal {
  --at-apply: 'h-11 px-5 text-base'
}

.a-button-large {
  --at-apply: 'h-12.5 px-6 text-lg'
}
</style>
