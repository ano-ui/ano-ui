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
}

const props = withDefaults(defineProps<AButtonProps>(), {
  type: 'primary',
  variant: 'solid',
  size: 'md',
  loading: false,
  disabled: false,
  icon: '',
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
  light: 'border-transparent',
}

const variantClass = computed(() => {
  if (props.variant === 'solid')
    return ''
  return `bg-transparent ${borderStyle[props.variant]} text-${props.type}`
})
</script>

<template>
  <button
    class="a-button-base"
    :class="[`bg-${type} border-${type}`, btnSize[size], variantClass, cc]"
    hover-class="a-button-hover"
  >
    <div v-if="icon" :class="icon" />
    <slot />
  </button>
</template>

<style scoped>

</style>
