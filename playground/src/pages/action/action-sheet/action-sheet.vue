<script setup lang="ts">
import { ref } from 'vue'
import type { ActionSheetAction } from 'ano-ui'

const showValue = ref(false)
const actions: ActionSheetAction[] = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
]
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <AActionSheet v-model:show="showValue" :actions="actions" />

      <div class="p-2">
        Basic
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Show ActionSheet" arrow @click="showValue = true" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
