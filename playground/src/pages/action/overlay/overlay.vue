<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const align = ref('center')
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <AOverlay :show="show" :align="align" @close="show = false">
        <div class="text-primary">
          Overlay
        </div>
      </AOverlay>
      <div class="p-2">
        Overlay
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="show = true">
          Show Overlay
        </AButton>
      </div>
      <div class="p-2">
        Flex Align
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="show = true;align = 'start'">
          Align Start
        </AButton>
        <AButton @click="show = true;align = 'center'">
          Align Center
        </AButton>
        <AButton @click="show = true;align = 'end'">
          Align End
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
