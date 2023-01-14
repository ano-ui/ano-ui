<script setup lang='ts'>
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { disabled, size, isChecked, toggle } = useRadio(props, emit)
</script>

<template>
  <div class="a-radio-base" :class="[`a-radio-${size}`, cc]" :style="cs">
    <div
      class="a-radio-radio-base"
      :class="[`a-radio-radio-${size}`, `a-${variant}`, isChecked ? `a-${type}` : '', { 'a-disabled': disabled }, ccc]"
      :style="ccs" @click="toggle"
    >
      <div class="a-radio-radio-icon">
        <template v-if="isChecked">
          <slot v-if="customIcon" name="icon" />
          <div v-else class="i-carbon-dot-mark animate-zoom-in animate-duration-200" :class="[icon]" />
        </template>
      </div>
    </div>
    <template v-if="label">
      {{ label }}
    </template>
    <slot v-else name="label" />
  </div>
</template>
