<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <div class="bg-white p-2 pb-safe">
    <div class="p-2">
      Type
    </div>
    <div p-2 flex="~ col gap2">
      <ANoticeBar>
        This is a notice bar.
      </ANoticeBar>
      <ANoticeBar color="success" loop>
        This is a notice bar. This is a notice bar.
      </ANoticeBar>
      <ANoticeBar color="info" :show="show" show-close @close="show = false">
        This is a notice bar. This is a notice bar.
      </ANoticeBar>
      <ANoticeBar color="warning">
        Warning
      </ANoticeBar>
      <ANoticeBar color="danger">
        Danger
      </ANoticeBar>
    </div>
    <div class="p-2">
      Variant
    </div>
    <div p-2 flex="~ col gap2">
      <ANoticeBar variant="solid">
        Solid
      </ANoticeBar>
      <ANoticeBar color="success" variant="outline">
        Outline
      </ANoticeBar>
      <ANoticeBar color="info" variant="ghost">
        Ghost
      </ANoticeBar>
      <ANoticeBar color="warning" variant="light">
        Light
      </ANoticeBar>
      <ANoticeBar color="danger" variant="text">
        Text
      </ANoticeBar>
    </div>
    <div class="p-2">
      Custom
    </div>
    <div p-2>
      <ANoticeBar color="danger" :show="show" show-close @close="show = false">
        Show Close
      </ANoticeBar>
      <ANoticeBar mt2 block cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none">
        Bg Gradient
      </ANoticeBar>
    </div>
  </div>
</template>
