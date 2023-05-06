<script setup lang="ts">
import ACellGroup from '../ACellGroup/ACellGroup.vue'
import { aCollapseEmits, aCollapseProps } from './a-collapse'
import { useACollapse } from './use-a-collapse'

const props = defineProps(aCollapseProps)
const emit = defineEmits(aCollapseEmits)

const { className, clickHandler } = useACollapse(props, emit)
</script>

<template>
  <div :class="[className, cc]" :style="cs" @click="clickHandler">
    <ACellGroup divider>
      <slot />
    </ACellGroup>
  </div>
</template>
