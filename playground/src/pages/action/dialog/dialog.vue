<script setup lang="ts">
import type { DialogOptions, DialogRef } from 'ano-ui'
import { ref } from 'vue'

const dialogRef = ref<DialogRef>()
const handleShow = (options: DialogOptions) => {
  dialogRef.value?.show(options)
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
      <div p-2>
        <ACellGroup>
          <ACell
            title="Base" arrow
            @click="handleShow({ title: 'Dialog Title', message: 'Dialog Message Dialog Message' })"
          />
          <ACell
            title="Base No Title" arrow
            @click="handleShow({ message: 'Dialog Message Dialog Message' })"
          />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
