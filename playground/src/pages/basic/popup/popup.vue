<script setup lang="ts">
import type { PopupOptions, PopupRef } from 'ano-ui'
import { ref } from 'vue'

const popupRef = ref<PopupRef>()
const showValue1 = ref(false)
const showValue2 = ref(false)
const showValue3 = ref(false)
const showValue4 = ref(false)
const showValue5 = ref(false)
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <APopup v-model:show="showValue1">
        <div class="flex justify-center items-center">
          Content
        </div>
      </APopup>
      <APopup v-model:show="showValue2" position="top" />
      <APopup v-model:show="showValue3" position="bottom" />
      <APopup v-model:show="showValue4" position="left" />
      <APopup v-model:show="showValue5" position="right" />

      <div class="p-2">
        Basic
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Show Popup" arrow @click="showValue1 = true" />
        </ACellGroup>
      </div>
      <div class="p-2">
        Position
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="From Top" arrow @click="showValue2 = true" />
          <ACell title="From Bottom" arrow @click="showValue3 = true" />
          <ACell title="From Left" arrow @click="showValue4 = true" />
          <ACell title="From Right" arrow @click="showValue5 = true" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
