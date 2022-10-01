<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<AButtonProps>(), {
  type: 'primary',
  variant: 'solid',
  size: 'md',
})

const emits = defineEmits(['click'])

interface AButtonProps {
  cc?: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  variant?: 'solid' | 'outline' | 'ghost' | 'light'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  block?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: string
  iconOnly?: boolean
}

const isDisabled = computed(() => props.loading || props.disabled)

const btnSize = {
  xs: 'a-button-xs',
  sm: 'a-button-sm',
  md: 'a-button-md',
  lg: 'a-button-lg',
}

const borderStyle = {
  solid: 'border-solid',
  outline: 'border-solid',
  ghost: 'border-dashed',
  light: '!border-transparent',
}

const variantClass = computed(() => {
  if (props.variant === 'solid')
    return ''
  const classes = [`${borderStyle[props.variant]}`, `text-${props.type}`]
  if (props.variant === 'light')
    classes.push('bg-op-20')
  else
    classes.push('bg-op-0')
  return classes.join(' ')
})
</script>

<template>
  <button
    class="a-button-base"
    :class="[`bg-${type} border-${type}`, { 'w-full': block }, { '!px0 aspect-square': iconOnly }, btnSize[size], variantClass, { 'a-button-disabled': isDisabled }, cc]"
    hover-class="a-button-hover"
    @click="emits('click', $event)"
  >
    <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
    <div v-else-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
  </button>
</template>
