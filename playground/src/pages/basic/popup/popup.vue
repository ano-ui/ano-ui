<script setup lang="ts">
import type { PopupOptions, PopupRef } from 'ano-ui'
import { ref } from 'vue'

const popupRef = ref<PopupRef>()
const handleShow = (options: PopupOptions = {}) => {
  popupRef.value?.show(options)
}

const handleConfirm = () => {
  // eslint-disable-next-line no-console
  console.log('confirm')
}

const handleCancel = () => {
  // eslint-disable-next-line no-console
  console.log('cancel')
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <APopup ref="popupRef">
        Content
      </APopup>
      <div class="p-2">
        Popup
      </div>
      <div p-2>
        <ACellGroup>
          <ACell
            title="Base" arrow
            @click="handleShow()"
          />
          <ACell
            title="Base No Title" arrow
            @click="handleShow()"
          />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
