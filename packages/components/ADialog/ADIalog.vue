<script setup lang='ts'>
import AOverlay from '../AOverlay/AOverlay.vue'
import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './use-dialog'

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const { _show } = useDialog(props, emit)
</script>

<template>
  <AOverlay>
    <div>
      aaa
    </div>
  </AOverlay>
</template>

<style scoped></style>
