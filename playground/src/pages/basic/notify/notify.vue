<script setup lang="ts">
import { ref } from 'vue'
import type { NotifyOptions } from '@ano-ui/components/ANotify/types'

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
  <div class="bg-white p-2 pb-safe">
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
    <div p-2 flex="~ gap2 wrap">
      <AButton @click="showNotify({ color: 'primary', position: 'default', content: 'Notify' })">
        Show Notify
      </AButton>
    </div>
    <div class="p-2">
      Position
    </div>
    <div p-2 flex="~ gap2 wrap">
      <AButton color="primary" @click="showNotify({ position: 'default', content: 'Default' })">
        Default
      </AButton>
      <AButton color="success" @click="showNotify({ position: 'top', content: 'Top' })">
        Top
      </AButton>
      <AButton color="info" @click="showNotify({ position: 'top-left', content: 'Top Left' })">
        Top Left
      </AButton>
      <AButton color="warning" @click="showNotify({ position: 'top-right', content: 'Top Right' })">
        Top Right
      </AButton>
      <AButton color="danger" @click="showNotify({ position: 'bottom', content: 'Bottom' })">
        Bottom
      </AButton>
      <AButton color="primary" @click="showNotify({ position: 'bottom-left', content: 'Bottom Left' })">
        Bottom Left
      </AButton>
      <AButton color="success" @click="showNotify({ position: 'bottom-right', content: 'Bottom Left' })">
        Bottom Right
      </AButton>
    </div>
    <div class="p-2">
      Type Icon
    </div>
    <div p-2 flex="~ gap2 wrap">
      <AButton color="primary" @click="showNotify({ color: 'primary', position: 'top', showIcon: true, content: 'Primary Icon' })">
        Primary
      </AButton>
      <AButton color="success" @click="showNotify({ color: 'success', position: 'top', showIcon: true, content: 'Success Icon' })">
        Success
      </AButton>
      <AButton color="info" @click="showNotify({ color: 'info', position: 'top', showIcon: true, content: 'Info Icon' })">
        Info
      </AButton>
      <AButton color="warning" @click="showNotify({ color: 'warning', position: 'top', showIcon: true, content: 'Warning Icon' })">
        Warning
      </AButton>
      <AButton color="danger" @click="showNotify({ color: 'danger', position: 'top', showIcon: true, content: 'Danger Icon' })">
        Danger
      </AButton>
    </div>
    <div class="p-2">
      Custom
    </div>
    <div p-2 flex="~ gap2 wrap">
      <AButton color="primary" @click="showNotify2({ color: 'primary', position: 'top', content: 'Custom Icon', customIcon: true })">
        Icon
      </AButton>
      <AButton color="success" @click="showNotify2({ color: 'success', position: 'top', content: 'Show Close', showClose: true })">
        Show Close
      </AButton>
      <AButton color="info" @click="showNotify2({ color: 'info', position: 'top' })">
        Slot
      </AButton>
      <AButton
        cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none" color="warning"
        @click="showNotify3({ color: 'warning', position: 'top', content: 'Bg Gradient' })"
      >
        Bg Gradient
      </AButton>
    </div>
  </div>
</template>
