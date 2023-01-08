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
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="showValue1 = true">
          Show Overlay
        </AButton>
      </div>
      <div class="p-2">
        Embedded Content
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="showValue2 = true">
          Embedded Content
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
