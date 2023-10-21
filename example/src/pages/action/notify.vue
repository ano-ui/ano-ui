<script setup lang="ts">
import type { NotifyInst, NotifyOptions } from 'ano-ui'

const notify = ref<NotifyInst>()

function showNotify(options: NotifyOptions) {
  notify.value!.show(options)
}

const notify2 = ref<NotifyInst>()

function showNotify2(options: NotifyOptions) {
  notify2.value!.show(options)
}
const notify3 = ref<NotifyInst>()

function showNotify3(options: NotifyOptions) {
  notify3.value!.show(options)
}

const topStyle = computed(() => {
  let top = '0px'
  // #ifdef H5
  // H5默认导航栏高度为44px
  top = '44px'
  // #endif
  return {
    top,
  }
})
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <ANotify ref="notify" :custom-style="topStyle" />
      <ANotify ref="notify2" :custom-style="topStyle">
        <template #icon>
          <div class="i-tabler-carrot" />
        </template>
        Slot
      </ANotify>
      <ANotify ref="notify3" :custom-style="topStyle" ccc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none" />

      <div class="p-4">
        基础用法
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="基础用法" @click="showNotify({ type: 'primary', position: 'default', message: '通知内容' })" />
      </ACellGroup>

      <div class="p-4">
        自定义位置
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="默认顶部" @click="showNotify({ position: 'default', message: '通知内容' })" />
        <ACell title="上方" @click="showNotify({ position: 'top', message: '通知内容' })" />
        <ACell title="左上角" @click="showNotify({ position: 'top-left', message: '通知内容' })" />
        <ACell title="右上角" @click="showNotify({ position: 'top-right', message: '通知内容' })" />
        <ACell title="下方" @click="showNotify({ position: 'bottom', message: '通知内容' })" />
        <ACell title="左下角" @click="showNotify({ position: 'bottom-left', message: '通知内容' })" />
        <ACell title="右下角" @click="showNotify({ position: 'bottom-right', message: '通知内容' })" />
      </ACellGroup>

      <div class="p-4">
        自定义图标
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="主要通知" @click="showNotify({ type: 'primary', showIcon: true, message: '通知内容' })" />
        <!-- <ACell title="信息通知" @click="showNotify({ type: 'info', showIcon: true, message: '通知内容' })" /> -->
        <ACell title="成功通知" @click="showNotify({ type: 'success', showIcon: true, message: '通知内容' })" />
        <ACell title="警告通知" @click="showNotify({ type: 'warning', showIcon: true, message: '通知内容' })" />
        <ACell title="危险通知" @click="showNotify({ type: 'danger', showIcon: true, message: '通知内容' })" />
      </ACellGroup>

      <div class="p-4">
        自定义
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="图标" @click="showNotify2({ type: 'primary', position: 'top', message: '通知内容' })" />
        <ACell
          title="关闭按钮"
          @click="showNotify2({ type: 'success', position: 'top', message: '通知内容', showClose: true })"
        />
        <ACell title="插槽" @click="showNotify2({ type: 'info', position: 'top' })" />
        <ACell title="背景渐变" @click="showNotify3({ type: 'warning', position: 'top', message: '通知内容' })" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Notify 消息通知
</route>
