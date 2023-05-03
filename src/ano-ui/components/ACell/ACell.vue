<script setup lang="ts">
import { cellEmits, cellProps } from './cell'
import { useCell } from './use-cell'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const { arrow, classes, clickHandler } = useCell(props, emit)
</script>

<template>
  <div
    class="a-cell relative box-border flex items-center overflow-hidden px-4 py-3 text-base after:absolute after:left-4 after:right-4 after:top-0 after:scale-y-50% after:border-t after:a-border after:border-t-solid a-bg-2 a-text-color"
    :class="[classes, { 'text-gray3': disabled }, cc]" :hover-class="(arrow && !disabled) ? '!a-active' : ''" :style="cs" @click="clickHandler"
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
        <span v-if="label" class="text-sm a-text-color-2">
          {{ label }}
        </span>
      </slot>
    </div>
    <slot name="value">
      <div v-if="value" class="a-text-color-2" :class="[title ? 'text-right' : 'text-left']">
        {{ value }}
      </div>
    </slot>
    <slot name="right-icon">
      <div
        v-if="arrow" class="i-tabler-chevron-right ml-1 transform transition-300 a-text-color-2"
        :class="[arrow === 'bottom' && 'rotate-90']"
      />
    </slot>
  </div>
</template>

<style scoped>
</style>
