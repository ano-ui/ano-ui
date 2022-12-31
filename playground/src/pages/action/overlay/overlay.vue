<script setup lang="ts">
import type { OverlayRef } from 'ano-ui'
import { ref } from 'vue'

const overlayRef = ref<OverlayRef>()
const showValue = ref(false)

const handleShow = () => {
  overlayRef.value?.show()
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <AOverlay v-model:show="showValue" :duration="300" />
      <AOverlay ref="overlayRef">
        <div class="flex justify-center items-center h-full">
          <div class="text-primary ma w-20 h-20 bg-white">
            OverlayRef
          </div>
        </div>
      </AOverlay>
      <div class="p-2">
        Overlay
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="showValue = true">
          Show Overlay
        </AButton>
      </div>
      <div class="p-2">
        Embedded Content
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="handleShow()">
          Embedded Content
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
