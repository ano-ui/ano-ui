<script setup lang='ts'>
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { disabled, size, checked, toggle } = useRadio(props, emit)
</script>

<template>
  <div class="a-radio-base" :class="[`a-radio-${size}`, cc]" :style="cs">
    <div
      class="a-radio-radio-base"
      :class="[`a-radio-radio-${size}`, checked ? `a-${type} a-${variant}` : '', { 'a-radio-disabled': disabled }, ccc]"
      :style="ccs" @click="toggle"
    >
      <div class="a-radio-radio-icon">
        <slot v-if="customIcon" :checked="checked" name="icon" />
        <div v-else-if="checked" class="i-carbon-dot-mark" :class="[icon]" />
      </div>
    </div>
    <div class="ml2" :class="{ 'a-radio-disabled-label': disabled }">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else />
    </div>
  </div>
</template>
