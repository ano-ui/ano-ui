<script setup lang="ts">
import { cellEmits, cellProps } from './cell'
import { useCell } from './use-cell'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const { arrow, classes, clickHandler } = useCell(props, emit)
</script>

<template>
  <div
    class="relative box-border flex items-center gap-2 overflow-hidden a-cell px-4 py-3 text-base after:absolute after:left-4 after:right-4 after:top-0 after:scale-y-50% after:border-t after:a-border after:border-t-solid a-bg-2 a-text-color"
    :class="[classes, { 'text-gray3': disabled }, cc]" :hover-class="(arrow && !disabled) ? '!a-active' : ''" :style="cs"
    @click="clickHandler"
  >
    <div v-if="$slots.title || title" class="flex-1" :class="titleClass" :style="titleStyle">
      <div class="flex items-center gap-1">
        <template v-if="$slots.icon || icon">
          <slot name="icon">
            <div v-if="icon" :class="icon" />
          </slot>
        </template>
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <slot name="label">
        <div v-if="label" class="text-sm a-text-color-2">
          {{ label }}
        </div>
      </slot>
    </div>
    <div
      v-if="$slots.value || $slots['right-icon'] || value || arrow" class="flex items-center gap-1"
      :class="[{ 'flex-1': $slots.value || value }, valueClass]" :style="valueStyle"
    >
      <div v-if="$slots.value || value" class="flex-1">
        <slot name="value">
          <div v-if="value" class="a-text-color-2" :class="[title ? 'text-right' : 'text-left']">
            {{ value }}
          </div>
        </slot>
      </div>
      <slot name="right-icon">
        <div
          v-if="arrow" class="a-text-color-2 i-tabler-chevron-right transform transition-300"
          :class="[arrow === 'bottom' && 'rotate-90']"
        />
      </slot>
    </div>
  </div>
</template>

<style scoped></style>
