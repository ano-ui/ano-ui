<script setup lang="ts">
import { computed } from 'vue'
import { cellEmits, cellProps } from './cell'
import { useCell } from './use-cell'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const { arrow, center, clickable, clickHandler } = useCell(props, emit)

const className = computed(() => {
  const _className = { 'items-center': center.value }

  // #ifdef H5
  Object.assign(_className, { 'a-cell-hover-h5': arrow.value || clickable.value })
  // #endif
  return _className
})
</script>

<template>
  <div
    class="a-cell-base" :class="[className, cc]" :hover-class="arrow ? 'a-cell-hover' : '' " hover-stay-time="60"
    :style="cs" @click="clickHandler"
  >
    <div class="a-cell-icon">
      <div v-if="icon" :class="icon" />
      <slot v-else name="icon" />
    </div>
    <div class="a-cell-title">
      <span v-if="title">
        {{ title }}
      </span>
      <slot v-else name="title" />
      <div v-if="label" class="a-cell-label">
        {{ label }}
      </div>

      <slot v-else name="label" />
    </div>
    <slot />
    <div class="a-cell-value">
      <span v-if="value">
        {{ value }}
      </span>
      <slot v-else name="value" />
    </div>
    <div class="a-cell-right-icon">
      <div v-if="arrow" class="i-carbon-chevron-right" />
      <slot name="right-icon" />
    </div>
  </div>
</template>
