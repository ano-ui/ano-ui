<script setup lang="ts">
import type { AlignType, OverlayRef } from 'ano-ui'
import { ref } from 'vue'

const overlayRef = ref<OverlayRef>()
const showValue = ref(false)

const handleShow = (align: AlignType) => {
  overlayRef.value?.show({ align })
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <AOverlay :show="showValue" @click="showValue = false">
        <div class="text-primary">
          Overlay
        </div>
      </AOverlay>
      <AOverlay ref="overlayRef">
        <div class="text-primary">
          Overlay
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
        Flex Align
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="handleShow('start')">
          Align Start
        </AButton>
        <AButton @click="handleShow('center')">
          Align Center
        </AButton>
        <AButton @click="handleShow('end')">
          Align End
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
