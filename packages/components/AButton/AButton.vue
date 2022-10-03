<script setup lang="ts">
import { computed } from 'vue'

interface AButtonProps {
  cc?: string
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  variant?: 'solid' | 'outline' | 'ghost' | 'light' | 'text'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  openType?: string
  block?: boolean
  loading?: boolean
  disabled?: boolean
  icon?: string
  iconOnly?: boolean
}

const props = withDefaults(defineProps<AButtonProps>(), {
  type: 'primary',
  variant: 'solid',
  size: 'md',
})

const emits = defineEmits(['click'])

const isDisabled = computed(() => props.loading || props.disabled)

const handleClick = (e: MouseEvent) => {
  if (isDisabled.value)
    return
  emits('click', e)
}
</script>

<template>
  <button
    class="a-button-base" :class="[`a-${type}`, { 'w-full': block }, { '!px0 aspect-square': iconOnly }, `a-button-${size}`, `a-${variant}`, { 'a-disabled': isDisabled }, cc]"
    :hover-class="isDisabled ? '' : (variant === 'text' ? 'a-button-text-hover' : 'a-button-hover')" :open-type="openType" @click="handleClick"
  >
    <div v-if="loading" class="i-carbon-circle-dash animate-spin" />
    <div v-else-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
  </button>
</template>
