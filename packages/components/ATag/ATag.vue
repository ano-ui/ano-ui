<script setup lang="ts">
import { computed } from 'vue'

interface AButtonProps {
  cc?: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  variant?: 'solid' | 'outline' | 'ghost' | 'light' | 'text'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  show?: boolean
  disabled?: boolean
  closable?: boolean
  icon?: string
  iconOnly?: boolean
}

const props = withDefaults(defineProps<AButtonProps>(), {
  type: 'primary',
  variant: 'solid',
  size: 'md',
  show: true,
})

const emits = defineEmits(['click', 'close'])

const handleClick = (e: MouseEvent) => {
  if (props.disabled)
    return
  emits('click', e)
}

const handleClose = (e: Event) => {
  if (props.disabled)
    return
  emits('close', e)
}
</script>

<template>
  <div
    v-if="show" class="a-tag-base"
    :class="[`a-${type}`, { '!p-0.5 aspect-square': iconOnly }, `a-tag-${size}`, `a-${variant}`, { 'a-disabled': disabled }, cc]"
    @click="handleClick"
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
    <div v-if="closable" class="i-carbon-close" @click.stop="handleClose" />
  </div>
</template>

