<script setup lang='ts'>
import { switchEmits, switchProps } from './switch'
import { useSwitch } from './use-switch'

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)

const { disabled, checked, toggle } = useSwitch(props, emit)
</script>

<template>
  <div
    class="a-switch-base"
    :class="[`a-switch-${size} a-${variant} `, checked ? `a-${type}` : '', { 'a-switch-disabled': disabled }, cc]"
    :style="cs" @click="toggle"
  >
    <div
      class="a-switch-dot"
      :class="[`a-switch-dot-${size}`, variant === 'solid' ? 'bg-white text-context' : 'bg-context text-white', { 'a-switch-dot-checked': checked }, { 'a-switch-dot-disabled': disabled }]"
    >
      <template v-if="checked">
        <div v-if="loading" class="i-tabler-loader animate-spin" />
        <template v-else-if="showIcon">
          <slot v-if="customIcon" name="icon" />
          <div v-else class="i-tabler-check animate-zoom-in animate-duration-200" :class="[icon]" />
        </template>
      </template>
    </div>
    <template v-if="checked">
      <div class="a-switch-active-label" :class="[`a-switch-dot-${size}`]">
        <template v-if="activeLabel">
          {{ activeLabel }}
        </template>
        <slot v-else name="active" />
      </div>
    </template>
    <template v-else>
      <div class="a-switch-inactive-label" :class="[`a-switch-dot-${size}`]">
        <template v-if="inactiveLabel">
          {{ inactiveLabel }}
        </template>
        <slot v-else name="inactive" />
      </div>
    </template>
  </div>
</template>
