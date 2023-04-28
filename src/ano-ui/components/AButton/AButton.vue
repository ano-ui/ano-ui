<script setup lang="ts">
import { buttonEmits, buttonProps } from './button'
import { useButton } from './use-button'

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const { className, disabled, clickHandler } = useButton(props, emit)
</script>

<template>
  <button
    class="a-button-wrapper-reset relative m-0 box-border inline-block overflow-visible rounded-lg text-center a-transition after:display-none"
    :class="[className, cc]" :hover-class="disabled ? '' : '!before:op10'" hover-stay-time="60" :open-type="openType"
    :style="cs" @click="clickHandler"
  >
    <div class="h-full flex items-center justify-center">
      <div v-if="loading" class="i-tabler-loader mr-1 animate-spin" />
      <div v-else-if="icon" class="mr-1" :class="[icon]" />
      <slot />
    </div>
  </button>
</template>

<style scoped>
.a-button-wrapper-reset {
  --at-apply: 'before:content-none before:absolute before:w-full before:h-full before:left-50% before:top-50% before:-translate-50% before:border-style-inherit before:border-width-inherit before:border-rd-inherit before:border-black before:bg-black before:op0'
}

.a-button-disabled {
  --at-apply: 'before:display-none op50'
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
