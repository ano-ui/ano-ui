<script setup lang="ts">
import { StringProp, ccProp, defaultFalseProp, disabledProp, variantProp } from '../composables/useProps'

const props = defineProps({
  cc: ccProp,
  title: StringProp,
  content: StringProp,
  description: StringProp,
  variant: variantProp,
  disabled: disabledProp,
  closable: Boolean,
  icon: StringProp,
  arrow: defaultFalseProp,
})
</script>

<template>
  <div class="a-bg-base-second a-cell-base" :class="[{ 'a-disabled': disabled }, cc]">
    <div class="flex justify-center items-center gap1">
      <div class="flex items-center gap1">
        <div v-if="icon" :class="icon" />
        <slot v-else name="icon" />
        <template v-if="title">
          <AText>
            {{ title }}
          </AText>
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

