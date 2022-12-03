<script setup lang="ts">
import { BooleanProp, CustomClassProp, CustomStyleProp, StringProp } from '../composables'

const props = defineProps({
  cc: CustomClassProp,
  cs: CustomStyleProp,
  title: StringProp,
  content: StringProp,
  description: StringProp,
  disabled: BooleanProp,
  icon: StringProp,
  arrow: BooleanProp,
})

const emit = defineEmits(['click'])

const handleClick = (e: MouseEvent) => {
  if (props.disabled)
    return
  emit('click', e)
}
</script>

<template>
  <div
    class="a-bg-base-second a-cell-base" :class="[{ 'a-cell-disabled': disabled }, cc]" hover-class="a-cell-hover"
    :style="cs" @click="handleClick"
  >
    <div class="flex justify-center items-center gap1">
      <div class="flex items-center gap1">
        <div v-if="icon" :class="icon" />
        <slot v-else name="icon" />
        <template v-if="title">
          {{ title }}
        </template>
        <slot v-else name="title" />
      </div>
      <div class="flex-1 text-right text-darkText text-sm">
        <div v-if="content">
          {{ content }}
        </div>
        <slot v-else name="content" />
      </div>
      <div v-if="arrow" class="i-carbon-chevron-right" />
      <slot name="right" />
    </div>
    <div v-if="description" class="text-darkText text-sm">
      {{ description }}
    </div>

    <slot v-else name="description" />
  </div>
</template>

