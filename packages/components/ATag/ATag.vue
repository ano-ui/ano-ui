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

const btnSize = { xs: 'a-tag-xs', sm: 'a-tag-sm', md: 'a-tag-md', lg: 'a-tag-lg' }

const borderStyle = {
  solid: 'border-solid',
  outline: 'border-solid',
  ghost: 'border-dashed',
  light: '!border-transparent',
  text: '!border-transparent !bg-0',
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
    :class="[`bg-${type} border-${type}`, { '!p-0.5 aspect-square': iconOnly }, btnSize[size], variantClass, { 'a-disabled': disabled }, cc]"
    @click="handleClick"
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <slot />
    <div v-if="closable" class="i-carbon-close" @click.stop="handleClose" />
  </div>
</template>

