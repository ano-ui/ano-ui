<script setup lang="ts">
import { useBaseProps } from '../composables/useLayer'
import { defaultTrueProp, disabledProp, sizeProp, variantProp } from '../composables/useProps'

const props = defineProps({
  ...useBaseProps(),
  label: String,
  size: sizeProp,
  variant: variantProp,
  disabled: disabledProp,
  show: defaultTrueProp,
  closable: Boolean,
  icon: String,
  iconOnly: Boolean,
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
    :class="[`a-${color}`, { '!p-0.5 aspect-square': iconOnly }, `a-tag-${size}`, `a-${variant}`, { 'a-disabled': disabled }, cc]"
    @click="handleClick"
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <div v-if="label">
      {{ label }}
    </div>
    <slot name="label" />
    <div v-if="closable" class="i-carbon-close" @click.stop="handleClose" />
  </div>
</template>

