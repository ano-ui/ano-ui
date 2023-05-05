<script setup lang="ts">
import { ref } from 'vue'
import type { ActionSheetAction, ToastInst } from '~/ano-ui'

const toast = ref<ToastInst>()

const showValue = ref(false)
const showValue2 = ref(false)
const actions: ActionSheetAction[] = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
]

function onCancel() {
  toast.value?.show({ message: 'Cancel' })
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <AToast ref="toast" />
      <AActionSheet v-model:show="showValue" :actions="actions" />
      <AActionSheet v-model:show="showValue2" :actions="actions" cancel-text="Cancel" @cancel="onCancel" />

      <div class="p-4">
        基础用法
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="基础用法" @click="showValue = true" />
        <ACell title="展示取消按钮" @click="showValue2 = true" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: ActionSheet 动作面板
</route>
