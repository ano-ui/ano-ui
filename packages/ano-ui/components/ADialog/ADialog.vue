<script setup lang='ts'>
import APopup from '../APopup/APopup.vue'
import AButton from '../AButton/AButton.vue'

import { dialogEmits, dialogProps } from './dialog'
import { useDialog } from './use-dialog'

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)
const { showValue, dialogStatus, showDialog, onConfirm, onCancel } = useDialog(props, emit)

defineExpose({ showDialog })
</script>

<template>
  <APopup v-model:show="showValue" position="center" :custom-class="['rounded-xl min-w-80% text-center', customClass]" :custom-style="customStyle">
    <div class="p-6">
      <div v-if="dialogStatus?.title" class="text-xl pb2">
        {{ dialogStatus.title }}
      </div>
      <div v-if="dialogStatus?.message" class="text-darkText">
        {{ dialogStatus.message }}
      </div>
    </div>
    <div class="items-center justify-center flex border-t border-t-gray-400/25 border-t-solid">
      <template v-if="dialogStatus?.showCancelButton">
        <AButton class="flex-1" type="danger" variant="text" square block @click.stop="onCancel">
          {{ dialogStatus.cancelButtonText || 'Cancel' }}
        </AButton>
      </template>
      <template v-if="dialogStatus?.showConfirmButton">
        <AButton type="primary" class="flex-1" variant="text" square block @click.stop="onConfirm">
          {{ dialogStatus.confirmButtonText || 'Confirm' }}
        </AButton>
      </template>
    </div>
  </APopup>
</template>

<style scoped></style>
