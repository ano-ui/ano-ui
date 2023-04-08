<script setup lang="ts">
import type { DialogOptions, DialogRef, ToastOptions } from 'ano-ui'
import { ref } from 'vue'

const toast = ref<{ showToast: (options?: ToastOptions) => {} }>()

function showToast(options: ToastOptions) {
  toast.value!.showToast(options)
}

const dialogRef = ref<DialogRef>()
function handleShow(options: DialogOptions) {
  dialogRef.value?.showDialog(options)
}

function handleConfirm() {
  showToast({ message: 'confirm' })
}

function handleCancel() {
  showToast({ message: 'cancel' })
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <AToast ref="toast" />
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

<route lang="yaml">
style:
  navigationBarTitleText: Dialog 弹出框
</route>
