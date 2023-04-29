<script setup lang="ts">
import ACollapseTransition from '../ACollapseTransition/ACollapseTransition.vue'
import { aCollapseItemEmits, aCollapseItemProps } from './a-collapse-item'
import { useACollapseItem } from './use-a-collapse-item'

const props = defineProps(aCollapseItemProps)
const emit = defineEmits(aCollapseItemEmits)

const { className, clickHandler } = useACollapseItem(props, emit)
const show = ref(true)
</script>

<template>
  <div :class="[className, cc]" :style="cs" @click="clickHandler">
    <div @click="show = !show">
      click me
    </div>
    <ACollapseTransition :show="show">
      <slot />
    </ACollapseTransition>
  </div>
</template>
