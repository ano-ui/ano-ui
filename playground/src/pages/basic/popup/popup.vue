<script setup lang="ts">
import type { PositionType } from 'ano-ui'
import { ref } from 'vue'

const showValue = ref(false)
const position = ref<PositionType>('center')

const handleShow = (p: PositionType) => {
  showValue.value = true
  position.value = p
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <APopup v-model:show="showValue" :position="position" :duration="300">
        <div class="flex justify-center items-center w-full h-full">
          Content
        </div>
      </APopup>

      <div class="p-2">
        Basic
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Show Popup" arrow @click="handleShow('center')" />
        </ACellGroup>
      </div>
      <div class="p-2">
        Position
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="From Top" arrow @click="handleShow('top')" />
          <ACell title="From Bottom" arrow @click="handleShow('bottom')" />
          <ACell title="From Left" arrow @click="handleShow('left')" />
          <ACell title="From Right" arrow @click="handleShow('right')" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
