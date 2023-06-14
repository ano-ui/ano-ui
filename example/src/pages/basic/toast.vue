<script setup lang="ts">
import { ref } from 'vue'
import type { ToastInst, ToastOptions } from 'ano-ui'

const toast = ref<ToastInst>()

function showToast(options: ToastOptions) {
  toast.value?.show(options)
}
</script>

<template>
  <UBasePage>
    <AToast ref="toast" />

    <div class="p-4">
      基础用法
    </div>
    <ACellGroup inset divider arrow>
      <ACell title="展示轻提示" @click="showToast({ position: 'default', message: '提示内容' })" />
    </ACellGroup>
    <div class="p-4">
      自定义位置
    </div>
    <ACellGroup inset divider arrow>
      <ACell title="默认" @click="showToast({ position: 'default', duration: 3000, message: '这是一个轻提示 3 秒后消失。' })" />
      <ACell title="顶部" @click="showToast({ position: 'top', message: '这是一个轻提示 2 秒后消失。' })" />
      <ACell title="底部" @click="showToast({ position: 'bottom', message: '这是一个轻提示 2 秒后消失。' })" />
    </ACellGroup>
    <div class="p-4">
      展示图标
    </div>
    <ACellGroup inset divider arrow>
      <ACell title="加载中" @click="showToast({ type: 'loading', message: '加载中' })" />
      <ACell title="成功" @click="showToast({ type: 'success', message: '成功' })" />
      <ACell title="危险" @click="showToast({ type: 'danger', message: '危险' })" />
      <ACell title="警告" @click="showToast({ type: 'warning', message: '警告' })" />
    </ACellGroup>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Toast 轻提示
</route>
