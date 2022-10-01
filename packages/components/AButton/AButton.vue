<script setup lang="ts">
import { computed } from 'vue'

interface AButtonProps {
  cc?: string
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  variant?: 'solid' | 'outline' | 'ghost' | 'light'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  loading?: boolean
  disabled?: boolean
  icon?: string
  iconOnly?: boolean
}

const props = withDefaults(defineProps<AButtonProps>(), {
  type: 'primary',
  variant: 'solid',
  size: 'md',
  loading: false,
  disabled: false,
  icon: '',
  iconOnly: false,
})

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
    :class="[`bg-${type} border-${type}`, { '!px0 aspect-square': iconOnly }, btnSize[size], variantClass, { 'a-button-disabled': isDisabled }, cc]"
    hover-class="a-button-hover"
  >
    <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
    <div v-else-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
  </button>
</template>
