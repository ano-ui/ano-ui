<script setup lang="ts">
import ACellGroup from '../ACellGroup/ACellGroup.vue'
import { collapseEmits, collapseProps } from './collapse'
import { useCollapse } from './use-collapse'

const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const { activeNames, setActiveNames } = useCollapse(props, emit)

defineExpose({
  /** @description active names */
  activeNames,
  /** @description set active names */
  setActiveNames,
})
</script>

<template>
  <ACellGroup divider :custom-class="[customClass]" :custom-style="[customStyle]">
    <slot />
  </ACellGroup>
</template>
