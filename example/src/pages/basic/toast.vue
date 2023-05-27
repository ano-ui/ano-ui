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
    <div px-4 flex="~ gap2 wrap">
      <AButton @click="showToast({ position: 'default', message: '提示内容' })">
        展示轻提示
      </AButton>
    </div>
    <div class="p-4">
      自定义位置
    </div>
    <div px-4 flex="~ gap2 wrap">
      <AButton type="primary" @click="showToast({ position: 'default', duration: 3000, message: '这是一个轻提示 3 秒后消失。' })">
        默认
      </AButton>
      <AButton type="success" @click="showToast({ position: 'top', message: '这是一个轻提示 2 秒后消失。' })">
        顶部展示
      </AButton>
      <AButton type="info" @click="showToast({ position: 'bottom', message: '这是一个轻提示 2 秒后消失。' })">
        底部展示
      </AButton>
    </div>
    <div class="p-4">
      展示图标
    </div>
    <div px-4 flex="~ gap2 wrap">
      <AButton @click="showToast({ type: 'loading', message: '加载中' })">
        加载中
      </AButton>
      <AButton @click="showToast({ type: 'success', message: '成功' })">
        成功
      </AButton>
      <AButton @click="showToast({ type: 'danger', message: '危险' })">
        危险
      </AButton>
      <AButton @click="showToast({ type: 'warning', message: '警告' })">
        警告
      </AButton>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Toast 轻提示
</route>
