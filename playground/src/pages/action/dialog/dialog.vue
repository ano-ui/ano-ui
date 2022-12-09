<script setup lang="ts">
import type { AlignType, OverlayRef } from 'ano-ui'
import { ref } from 'vue'

const overlayRef = ref<OverlayRef>()

const handleShow = (align: AlignType) => {
  overlayRef.value?.show({ align })
}

const handleClose = () => {
  // eslint-disable-next-line no-console
  console.log('close')
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <ADialog ref="overlayRef" @close="handleClose">
        <div class="text-primary">
          Overlay
        </div>
      </ADialog>
      <div class="p-2">
        Overlay
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="handleShow">
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
