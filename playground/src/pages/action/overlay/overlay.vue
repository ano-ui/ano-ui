<script setup lang="ts">
import { ref } from 'vue'

const showValue1 = ref(false)
const showValue2 = ref(false)
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <AOverlay :show="showValue1" :duration="300" @click="showValue1 = false" />
      <AOverlay :show="showValue2" :duration="300" @click="showValue2 = false">
        <div class="flex justify-center items-center h-full">
          <div class="w-20 h-20 bg-white" @click.stop />
        </div>
      </AOverlay>
      <div class="p-2">
        Overlay
      </div>
      <div p-2>
        <ACellGroup>
          <ACell arrow title="Show" @click="showValue1 = true" />
          <ACell arrow title="Embedded Content" @click="showValue2 = true" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
