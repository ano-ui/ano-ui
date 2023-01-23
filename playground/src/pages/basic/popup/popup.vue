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
    <div class="pb-safe">
      <APopup v-model:show="showValue" :position="position" :duration="300">
        <div class="flex justify-center items-center bg-teal w-200px h-100px">
          Content
        </div>
      </APopup>

      <div class="p-4">
        Basic
      </div>
      <ACellGroup inset divider arrow>
        <ACell title="Show Popup" arrow @click="handleShow('center')" />
      </ACellGroup>
      <div class="p-4">
        Position
      </div>
      <ACellGroup inset divider arrow>
        <ACell title="From Top" @click="handleShow('top')" />
        <ACell title="From Bottom" @click="handleShow('bottom')" />
        <ACell title="From Left" @click="handleShow('left')" />
        <ACell title="From Right" @click="handleShow('right')" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>
