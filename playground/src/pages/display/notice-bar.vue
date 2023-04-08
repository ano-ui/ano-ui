<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Type
      </div>
      <div px-4 flex="~ col gap2">
        <ANoticeBar>
          This is a notice bar.
        </ANoticeBar>
        <ANoticeBar type="success" loop>
          This is a notice bar. This is a notice bar.
        </ANoticeBar>
        <ANoticeBar type="info" :show="show" show-close @close="show = false">
          This is a notice bar. This is a notice bar.
        </ANoticeBar>
        <ANoticeBar type="warning">
          Warning
        </ANoticeBar>
        <ANoticeBar type="danger">
          Danger
        </ANoticeBar>
      </div>
      <div class="p-4">
        Variant
      </div>
      <div px-4 flex="~ col gap2">
        <ANoticeBar variant="solid">
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
        Custom
      </div>
      <div px-4>
        <ANoticeBar type="danger" :show="show" show-close @close="show = false">
          Show Close
        </ANoticeBar>
        <ANoticeBar mt2 cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none">
          <template #icon>
            <div class="i-carbon-palm-tree" />
          </template>
          Bg Gradient
        </ANoticeBar>
      </div>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: NoticeBar 通告栏
</route>
