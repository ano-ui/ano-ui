<script setup lang="ts">
import { ref } from 'vue'
import type { NotifyOptions } from 'ano-ui'

const notify = ref<{ showNotify: (options?: NotifyOptions) => {} }>()

const showNotify = (options: NotifyOptions) => {
  notify.value!.showNotify(options)
}

const notify2 = ref<{ showNotify: (options?: NotifyOptions) => {} }>()

const showNotify2 = (options: NotifyOptions) => {
  notify2.value!.showNotify(options)
}
const notify3 = ref<{ showNotify: (options?: NotifyOptions) => {} }>()

const showNotify3 = (options: NotifyOptions) => {
  notify3.value!.showNotify(options)
}
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <ANotify ref="notify" />
      <ANotify ref="notify2">
        <template #icon>
          <div class="i-carbon-send-alt-filled" />
        </template>
        Slot
      </ANotify>
      <ANotify ref="notify3" cc="bg-gradient-to-r from-indigo-500 to-pink-500" />

      <div class="p-2">
        Notify
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Show" arrow @click="showNotify({ type: 'primary', position: 'default', message: 'Notify' })" />
        </ACellGroup>
      </div>
      <div class="p-2">
        Position
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Default" arrow @click="showNotify({ position: 'default', message: 'Default' })" />
          <ACell title="Top" arrow @click="showNotify({ position: 'top', message: 'Top' })" />
          <ACell title="Top Left" arrow @click="showNotify({ position: 'top-left', message: 'Top Left' })" />
          <ACell title="Top Right" arrow @click="showNotify({ position: 'top-right', message: 'Top Right' })" />
          <ACell title="Bottom" arrow @click="showNotify({ position: 'bottom', message: 'Bottom' })" />
          <ACell title="Bottom Left" arrow @click="showNotify({ position: 'bottom-left', message: 'Bottom Left' })" />
          <ACell title="Bottom Right" arrow @click="showNotify({ position: 'bottom-right', message: 'Bottom Right' })" />
        </ACellGroup>
      </div>
      <div class="p-2">
        Type Icon
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Primary" arrow @click="showNotify({ type: 'primary', showIcon: true, message: 'Primary Icon' })" />
          <ACell title="Success" arrow @click="showNotify({ type: 'success', showIcon: true, message: 'Success Icon' })" />
          <ACell title="Info" arrow @click="showNotify({ type: 'info', showIcon: true, message: 'Info Icon' })" />
          <ACell title="Warning" arrow @click="showNotify({ type: 'warning', showIcon: true, message: 'Warning Icon' })" />
          <ACell title="Danger" arrow @click="showNotify({ type: 'danger', showIcon: true, message: 'Danger Icon' })" />
        </ACellGroup>
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Custom Icon" arrow @click="showNotify2({ type: 'primary', position: 'top', message: 'Custom Icon', customIcon: true })" />
          <ACell title="Show Close" arrow @click="showNotify2({ type: 'success', position: 'top', message: 'Show Close', showClose: true })" />
          <ACell title="Slot" arrow @click="showNotify2({ type: 'info', position: 'top' })" />
          <ACell title="Bg Gradient" arrow @click="showNotify3({ type: 'warning', position: 'top', message: 'Bg Gradient' })" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
