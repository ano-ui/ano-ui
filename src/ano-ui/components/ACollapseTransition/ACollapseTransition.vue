<script lang="ts" setup>
import { aCollapseTransitionEmits, aCollapseTransitionProps } from './a-collapse-transition'
import { useACollapseTransition } from './use-a-collapse-transition'

const props = defineProps(aCollapseTransitionProps)
const emit = defineEmits(aCollapseTransitionEmits)

const { elementGuid, animation } = useACollapseTransition(props, emit)
</script>

<template>
  <view overflow-hidden :animation="animation">
    <div :id="elementGuid" :class="[cc]" :style="[cs]">
      <slot />
    </div>
  </view>
</template>

<style>

</style>
