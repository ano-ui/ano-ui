<script setup lang="ts">
import { cellEmits, cellProps } from './cell'
import { useCell } from './use-cell'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const { disabled, clickHandler } = useCell(props, emit)
</script>

<template>
  <div
    class="a-bg-base-second a-cell-base" :class="[{ 'a-cell-disabled': disabled }, cc]" hover-class="a-cell-hover"
    :style="cs" @click="clickHandler"
  >
    <div class="flex justify-center items-center gap1">
      <div class="flex items-center gap1">
        <div v-if="icon" :class="icon" />
        <slot v-else name="icon" />
        <template v-if="title">
          {{ title }}
        </template>
        <slot v-else name="title" />
      </div>
      <div class="flex-1 text-right text-darkText text-sm">
        <div v-if="content">
          {{ content }}
        </div>
        <slot v-else name="content" />
      </div>
      <div v-if="arrow" class="i-carbon-chevron-right" />
      <slot name="right" />
    </div>
    <div v-if="description" class="text-darkText text-sm">
      {{ description }}
    </div>

    <slot v-else name="description" />
  </div>
</template>
