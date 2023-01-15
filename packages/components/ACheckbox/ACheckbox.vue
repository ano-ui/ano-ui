<script setup lang='ts'>
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './use-checkbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const { disabled, size, isChecked, toggle } = useCheckbox(props, emit)
</script>

<template>
  <div class="a-checkbox-base" :class="[`a-checkbox-${size}`, cc]" :style="cs">
    <div
      class="a-checkbox-checkbox-base"
      :class="[`a-checkbox-checkbox-${size}`, `a-${variant}`, isChecked ? `a-${type}` : '', { 'a-disabled': disabled }, ccc]"
      :style="ccs" @click="toggle"
    >
      <div class="a-checkbox-checkbox-icon">
        <template v-if="isChecked">
          <slot v-if="customIcon" name="icon" />
          <div v-else class="i-carbon-checkmark animate-zoom-in animate-duration-200" :class="[icon]" />
        </template>
      </div>
    </div>
    <template v-if="label">
      {{ label }}
    </template>
    <slot v-else />
  </div>
</template>
