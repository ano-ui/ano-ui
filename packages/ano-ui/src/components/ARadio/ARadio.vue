<script setup lang='ts'>
import ATransition from '../ATransition/ATransition.vue'
import { radioEmits, radioProps } from './radio'
import { useRadio } from './use-radio'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const { disabled, size, checked, toggle } = useRadio(props, emit)
</script>

<template>
  <div class="a-radio-base" :class="[`a-radio-${size}`, cc]" :style="cs">
    <div
      class="a-radio-radio-base border-context"
      :class="[`a-radio-radio-${size}`, checked ? `a-${type}` : '', { 'a-radio-disabled': disabled }, ccc]" :style="ccs"
      @click="toggle"
    >
      <ATransition class="a-radio-radio-dot" :show="!!checked" name="fade-zoom">
        <div v-if="!$slots.icon" class="bg-context rounded-full" :class="[`a-radio-radio-dot-${size}`]" />
        <slot v-else name="icon" />
      </ATransition>
    </div>
    <div v-if="$slots.default || label" class="ml2" :class="{ 'a-radio-disabled-label': disabled }">
      <template v-if="label">
        {{ label }}
      </template>
      <slot v-else />
    </div>
  </div>
</template>
