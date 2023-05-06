<script setup lang="ts">
import { ref } from 'vue'
import type { DialogOptions, DialogRef, ToastInst, ToastOptions } from '~/ano-ui'

const toast = ref<ToastInst>()

function showToast(options: ToastOptions) {
  toast.value?.show(options)
}

const dialogRef = ref<DialogRef>()
function handleShow(options: DialogOptions) {
  dialogRef.value?.showDialog(options)
}

function handleConfirm() {
  showToast({ message: '确认' })
}

function handleCancel() {
  showToast({ message: '取消' })
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <AToast ref="toast" />
      <ADialog ref="dialogRef" @confirm="handleConfirm" @cancel="handleCancel" />

      <div class="p-4">
        基础用法
      </div>
      <ACellGroup arrow inset divider>
        <ACell title="提示弹窗" @click="handleShow({ title: '标题', message: '我是内容呀' })" />
        <ACell title="提示弹窗（无标题）" @click="handleShow({ message: '我是内容呀' })" />
        <ACell
          title="确认弹窗"
          @click="handleShow({ title: '标题', message: '我是内容呀', showCancelButton: true, showConfirmButton: true, confirmButtonText: '确认', cancelButtonText: '取消' })"
        />
      </ACellGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Dialog 弹出框
</route>
