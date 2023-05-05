<script setup lang="ts">
import { ref } from 'vue'

const showValue1 = ref(false)
const showValue2 = ref(false)
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <AOverlay :show="showValue1" :duration="300" @click="showValue1 = false" />
      <AOverlay :show="showValue2" :duration="300" @click="showValue2 = false">
        <div class="h-full flex items-center justify-center">
          <div class="h-20 w-20 bg-white" @click.stop />
        </div>
      </AOverlay>
      <div class="p-4">
        基础用法
      </div>
      <ACellGroup arrow divider inset>
        <ACell arrow title="展示遮罩" @click="showValue1 = true" />
        <ACell arrow title="嵌入内容" @click="showValue2 = true" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Overlay 遮罩层
</route>
