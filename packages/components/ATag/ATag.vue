<script setup lang="ts">
import { BooleanProp, BooleanTrueProp, SizeProp, StringProp, VariantProp, useBaseProps } from '../composables'

const props = defineProps({
  ...useBaseProps(),
  label: StringProp,
  size: SizeProp,
  variant: VariantProp,
  disabled: BooleanProp,
  show: BooleanTrueProp,
  closable: BooleanProp,
  icon: StringProp,
  iconOnly: BooleanProp,
})

const emit = defineEmits(['click', 'close'])

const handleClick = (e: MouseEvent) => {
  if (props.disabled)
    return
  emit('click', e)
}

const handleClose = (e: Event) => {
  if (props.disabled)
    return
  emit('close', e)
}
</script>

<template>
  <div
    v-if="show" class="a-tag-base"
    :class="[`a-${color}`, `a-tag-${size}`, { '!p-0.5 aspect-square': iconOnly }, `a-${variant}`, { 'a-disabled': disabled }, cc]"
    :style="cs" @click="handleClick"
  >
    <div v-if="icon" class="text-base" :class="icon" />
    <slot v-else name="icon" />
    <div v-if="label">
      {{ label }}
    </div>
    <slot name="label" />
    <div v-if="closable" class="i-carbon-close" @click.stop="handleClose" />
  </div>
</template>

