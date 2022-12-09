<script setup lang='ts'>
import { ref } from 'vue'
import type { OverlayRef } from '../AOverlay'
import AButton from '../AButton/AButton.vue'
import AOverlay from '../AOverlay/AOverlay.vue'
import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './use-dialog'
import type { DialogOptions } from './types'

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const { showValue, dialogStatus, showDialog, onConfirm, onCancel } = useDialog(props, emit)

const handleShowDialog = (options: DialogOptions) => {
  showDialog(options)
}

defineExpose({ show: handleShowDialog })
</script>

<template>
  <AOverlay :show="showValue">
    <div class="bg-green w-68% rounded-lg">
      <template v-if="dialogStatus?.title">
        {{ dialogStatus.title }}
      </template>
      <div class="flex justify-center items-center">
        <template v-if="dialogStatus?.showCancelButton">
          <AButton class="flex-1" color="danger" variant="text" @click="onCancel">
            {{ dialogStatus.cancelButtonText || 'Cancel' }}
          </AButton>
        </template>
        <template v-if="dialogStatus?.showConfirmButton">
          <AButton class="flex-1" variant="text" @click="onConfirm">
            {{ dialogStatus.confirmButtonText || 'Confirm' }}
          </AButton>
        </template>
      </div>
    </div>
  </AOverlay>
</template>

<style scoped></style>
