<script setup lang="ts">
import { computed } from 'vue'
import { cellEmits, cellProps } from './cell'
import { useCell } from './use-cell'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const { arrow, clickable, clickHandler } = useCell(props, emit)

const className = computed(() => {
  //
  const _className = { 'text-gray3': props.disabled }

  // #ifdef H5
  Object.assign(_className, { 'a-active-h5': arrow.value || clickable.value })
  // #endif
  return _className
})
</script>

<template>
  <div
    class="a-cell relative box-border flex items-center overflow-hidden px-4 py-3 text-base after:absolute after:bottom-0 after:left-4 after:right-4 after:scale-y-50% after:border-t after:a-border after:border-t-solid a-bg-2 a-text-color after:content-none"
    :class="[className, cc]" :hover-class=" (arrow && !disabled) ? '!a-active' : ''" :style="cs" @click="clickHandler"
  >
    <div v-if="$slots.title || title" class="flex-1">
      <div class="flex items-center gap-2">
        <slot name="icon">
          <div v-if="icon" :class="icon" />
        </slot>
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <slot name="label">
        <span class="text-sm a-text-color-2">
          {{ label }}
        </span>
      </slot>
    </div>
    <slot name="value">
      <div v-if="title" class="a-text-color-2" :class="[title ? 'text-right' : 'text-left']">
        {{ value }}
      </div>
    </slot>
    <slot name="right-icon">
      <div v-if="arrow" class="i-tabler-chevron-right ml-1 transform transition-300 a-text-color-2" :class="[arrow === 'bottom' && 'rotate-90', { 'text-gray3': disabled }]" />
    </slot>
  </div>
</template>

<style scoped>
</style>
