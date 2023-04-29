<script setup lang="ts">
import { computed } from 'vue'
import { cellEmits, cellProps } from './cell'
import { useCell } from './use-cell'

const props = defineProps(cellProps)
const emit = defineEmits(cellEmits)

const { arrow, center, clickable, clickHandler } = useCell(props, emit)

const className = computed(() => {
  const _className = { 'items-center': center.value, 'a-cell-disabled': props.disabled }
  // #ifdef H5
  if (!props.disabled)
    Object.assign(_className, { 'a-cell-hover-h5': arrow.value || clickable.value })
  // #endif
  return _className
})
</script>

<template>
  <div
    class="a-cell-base" :class="[className, cc]" :hover-class="(arrow && !disabled) ? 'a-cell-hover' : ''" hover-stay-time="60"
    :style="cs" @click="clickHandler"
  >
    <div v-if="icon" class="a-cell-icon" :class="icon" />
    <slot v-else name="icon" />
    <div v-if="$slots.title || title" class="flex-1">
      <span v-if="title">
        {{ title }}
      </span>
      <slot v-else name="title" />
      {{ label }}

      <div v-if="label" class="a-cell-label">
        {{ label }}
      </div>

      <slot v-else name="label" />
    </div>

    <slot />
    <div class="a-cell-value" :class="{ 'flex-1 text-left': !title }">
      <span v-if="value">
        {{ value }}
      </span>
      <slot v-else name="value" />
    </div>
    <div v-if="arrow" class="i-tabler-chevron-right a-cell-right-icon" :class="[arrow === 'bottom' && 'rotate-90']" />
    <slot v-else name="right-icon" />
  </div>
</template>

<style scoped>
.a-cell-base {
  --at-apply: 'relative box-border a-transition flex a-bg-2 px-4 py-3 text-base a-text-color overflow-hidden'
}
.a-cell-disabled {
  --at-apply: 'text-gray';
}

.a-cell-icon {
  --at-apply: 'mr1 h-1.5rem flex justify-center items-center'
}

.a-cell-value {
  --at-apply: 'text-right a-text-color-2 v-middle leading-inherit'
}

.a-cell-label {
  --at-apply: 'text-sm a-text-color-2'
}

.a-cell-right-icon {
  --at-apply: 'ml1 h-1.5rem flex justify-center items-center a-text-color-2 transform transition-300'
}
.a-cell-disabled .a-cell-right-icon {
  --at-apply: 'text-gray3'
}

.a-cell-hover {
  --at-apply: 'a-active'
}

.a-cell-hover-h5 {
  --at-apply: 'a-active-h5'
}
</style>
