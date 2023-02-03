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
    <div class="pb-safe">
      <AToast ref="toast" />

      <div class="p-4">
        Toast
      </div>
      <div px-4 flex="~ gap2 wrap">
        <AButton @click="showToast({ position: 'default', message: 'Toast' })">
          Show Toast
        </AButton>
      </div>
      <div class="p-4">
        Position
      </div>
      <div px-4 flex="~ gap2 wrap">
        <AButton type="primary" @click="showToast({ position: 'default', duration: 3000, message: 'This is a toast, and it will disappear after 3 seconds.' })">
          Default
        </AButton>
        <AButton type="success" @click="showToast({ position: 'top', message: 'This is a toast, and it will disappear after 2 seconds.' })">
          Top
        </AButton>
        <AButton type="info" @click="showToast({ position: 'bottom', message: 'This is a toast, and it will disappear after 2 seconds.' })">
          Bottom
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
