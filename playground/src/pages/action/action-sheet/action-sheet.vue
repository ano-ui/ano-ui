<script setup lang="ts">
import { ref } from 'vue'
import type { ActionSheetAction, ToastOptions } from 'ano-ui'
const toast = ref<{ showToast: (options?: ToastOptions) => {} }>()

const showValue = ref(false)
const showValue2 = ref(false)
const actions: ActionSheetAction[] = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
]

const onCancel = () => {
  toast.value?.showToast({ message: 'Cancel' })
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <AToast ref="toast" />
      <AActionSheet v-model:show="showValue" :actions="actions" />
      <AActionSheet v-model:show="showValue2" :actions="actions" cancel-text="Cancel" @cancel="onCancel" />

      <div class="p-4">
        Basic
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="Show" @click="showValue = true" />
        <ACell title="Show Cancel" @click="showValue2 = true" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>
