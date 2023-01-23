<script setup lang="ts">
import type { DialogOptions, DialogRef } from 'ano-ui'
import { ref } from 'vue'

const dialogRef = ref<DialogRef>()
const handleShow = (options: DialogOptions) => {
  dialogRef.value?.showDialog(options)
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
    <div class="pb-safe">
      <ADialog ref="dialogRef" @confirm="handleConfirm" @cancel="handleCancel" />
      <div class="p-4">
        Dialog
      </div>
      <ACellGroup arrow inset divider>
        <ACell
          title="Basic"
          @click="handleShow({ title: 'Dialog Title', message: 'Dialog Message Dialog Message' })"
        />
        <ACell
          title="Basic No Title"
          @click="handleShow({ message: 'Dialog Message Dialog Message' })"
        />
        <ACell
          title="Confirm"
          @click="handleShow({ title: 'Dialog Title', message: 'Dialog Message Dialog Message', showCancelButton: true, showConfirmButton: true })"
        />
      </ACellGroup>
    </div>
  </UBasePage>
</template>
