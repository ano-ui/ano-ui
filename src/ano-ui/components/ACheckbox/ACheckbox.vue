<script setup lang='ts'>
import { checkboxEmits, checkboxProps } from './checkbox'
import { useCheckbox } from './use-checkbox'

const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const { checked, disabled, size, toggle } = useCheckbox(props, emit)
</script>

<template>
  <div class="a-checkbox-base" :class="[`a-checkbox-${size}`, cc]" :style="cs">
    <div
      class="a-checkbox-checkbox-base"
      :class="[`a-checkbox-checkbox-${size}`, checked ? `a-${type} a-${variant}` : '', { 'a-checkbox-disabled': disabled }, ccc]"
      :style="ccs" @click="toggle"
    >
      <ATransition class="a-checkbox-checkbox-icon" :show="!!checked" name="fade-zoom">
        <div v-if="!$slots.icon" class="i-tabler-check" :class="[icon]" />
        <slot v-else :checked="checked" name="icon" />
      </ATransition>
    </div>
    <div class="ml2" :class="{ 'a-checkbox-disabled-label': disabled }">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else />
    </div>
  </div>
</template>
