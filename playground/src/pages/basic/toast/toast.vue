<script setup lang="ts">
import { ref } from 'vue'
import type { ToastOptions } from 'ano-ui'

const toast = ref<{ showToast: (options?: ToastOptions) => {} }>()

const showToast = (options: ToastOptions) => {
  toast.value!.showToast(options)
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <AToast ref="toast" />

      <div class="p-2">
        Toast
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="showToast({ position: 'default', message: 'Toast' })">
          Show Toast
        </AButton>
      </div>
      <div class="p-2">
        Position
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton type="primary" @click="showToast({ position: 'default', message: 'Default' })">
          Default
        </AButton>
        <AButton type="success" @click="showToast({ position: 'top', message: 'Top' })">
          Top
        </AButton>
        <AButton type="info" @click="showToast({ position: 'bottom', message: 'Bottom' })">
          Bottom
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
