<script setup lang="ts">
import { tagEmits, tagProps } from './tag'
import { useTag } from './use-tag'

const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const { disabled, clickHandler, closeHandler } = useTag(props, emit)
</script>

<template>
  <div
    v-if="show" class="a-tag-base"
    :class="[`a-${color}`, `a-tag-${size}`, { '!p-0.5 aspect-square': iconOnly }, `a-${variant}`, { 'a-disabled': disabled }, cc]"
    :style="cs" @click="clickHandler"
  >
    <div v-if="icon" class="text-base" :class="icon" />
    <slot v-else name="icon" />
    <div v-if="label">
      {{ label }}
    </div>
    <slot name="label" />
    <div v-if="closable" class="i-carbon-close" @click.stop="closeHandler" />
  </div>
</template>
