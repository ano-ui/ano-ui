<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <UBasePage>
    <div class="p-4">
      基础用法
    </div>
    <div px-4 flex="~ col gap2">
      <ANoticeBar type="primary">
        This is a notice bar.
      </ANoticeBar>
      <ANoticeBar type="success" loop>
        This is a notice bar. This is a notice bar.
      </ANoticeBar>
      <ANoticeBar type="info">
        This is a notice bar.
      </ANoticeBar>
      <ANoticeBar type="warning" :show="show" show-close @close="show = false">
        Warning
      </ANoticeBar>
      <ANoticeBar type="danger">
        Danger
      </ANoticeBar>
    </div>
    <div class="p-4">
      变体
    </div>
    <div px-4 flex="~ col gap2">
      <ANoticeBar type="primary" variant="solid">
        Solid
      </ANoticeBar>
      <ANoticeBar type="success" variant="outline">
        Outline
      </ANoticeBar>
      <ANoticeBar type="info" variant="ghost">
        Ghost
      </ANoticeBar>
      <ANoticeBar type="warning" variant="light">
        Light
      </ANoticeBar>
    </div>
    <div class="p-4">
      自定义
    </div>
    <div px-4>
      <ANoticeBar mt2 custom-class="bg-gradient-to-r from-indigo-500 to-pink-500 border-none">
        <template #icon>
          <div class="i-tabler-carrot" />
        </template>
        Bg Gradient
      </ANoticeBar>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: NoticeBar 通知栏
</route>
