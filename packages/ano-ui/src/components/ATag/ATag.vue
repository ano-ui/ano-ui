<script setup lang="ts">
import { tagEmits, tagProps } from './tag'
import { useTag } from './use-tag'

const props = defineProps(tagProps)
const emit = defineEmits(tagEmits)

const { disabled, clickHandler, closeHandler } = useTag(props, emit)
</script>

<template>
  <div
    v-if="show"
    class="relative box-border inline-flex items-center justify-center gap1 overflow-visible a-transition after:display-none"
    :class="[`a-${type}`, `a-tag-${size}`, { '!p-0.5 aspect-square': iconOnly }, `a-${variant}`, { 'op-50': disabled }, cc]"
    :style="cs" @click="clickHandler"
  >
    <div v-if="icon" :class="icon" />
    <slot v-else name="icon" />
    <div v-if="label">
      {{ label }}
    </div>
    <slot v-else />
    <div v-if="closable" class="i-tabler-x" @click.stop="closeHandler" />
  </div>
</template>

<style scoped>
.a-tag-mini {
  --at-apply: 'px1 h-5 text-xs'
}

.a-tag-small {
  --at-apply: 'px1.5 h-6 text-sm'
}

.a-tag-normal {
  --at-apply: 'px2 h-7 text-base'
}

.a-tag-large {
  --at-apply: 'px2.5 h-8 text-lg'
}
</style>
