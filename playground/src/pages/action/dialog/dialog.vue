<script setup lang="ts">
import type { DialogOptions, DialogRef } from 'ano-ui'
import { ref } from 'vue'

const dialogRef = ref<DialogRef>()
const dialogOptions = ref<DialogOptions>({
  title: 'Dialog Title',
  message: 'Dialog Message',
})

const handleShow = () => {
  dialogRef.value?.show(dialogOptions.value)
}

const handleConfirm = () => {
  // eslint-disable-next-line no-console
  console.log('confirm')
}

const handleCancel = () => {
  // eslint-disable-next-line no-console
  console.log('cancel')
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <ADialog ref="dialogRef" @confirm="handleConfirm" @cancel="handleCancel" />
      <div class="p-2">
        Dialog
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="handleShow">
          Show Dialog
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
