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
      <AButton @click="showNotify({ type: 'primary', position: 'default', content: 'Notify' })">
        Show Notify
      </AButton>
    </div>
    <div class="p-2">
      Position
    </div>
    <div p-2 flex="~ gap2 wrap">
      <AButton type="primary" @click="showNotify({ position: 'default', content: 'Default' })">
        Default
      </AButton>
      <AButton type="success" @click="showNotify({ position: 'top', content: 'Top' })">
        Top
      </AButton>
      <AButton type="info" @click="showNotify({ position: 'top-left', content: 'Top Left' })">
        Top Left
      </AButton>
      <AButton type="warning" @click="showNotify({ position: 'top-right', content: 'Top Right' })">
        Top Right
      </AButton>
      <AButton type="danger" @click="showNotify({ position: 'bottom', content: 'Bottom' })">
        Bottom
      </AButton>
      <AButton type="primary" @click="showNotify({ position: 'bottom-left', content: 'Bottom Left' })">
        Bottom Left
      </AButton>
      <AButton type="success" @click="showNotify({ position: 'bottom-right', content: 'Bottom Left' })">
        Bottom Right
      </AButton>
    </div>
    <div class="p-2">
      Type Icon
    </div>
    <div p-2 flex="~ gap2 wrap">
      <AButton type="primary" @click="showNotify({ type: 'primary', position: 'top', showIcon: true, content: 'Primary Icon' })">
        Primary
      </AButton>
      <AButton type="success" @click="showNotify({ type: 'success', position: 'top', showIcon: true, content: 'Success Icon' })">
        Success
      </AButton>
      <AButton type="info" @click="showNotify({ type: 'info', position: 'top', showIcon: true, content: 'Info Icon' })">
        Info
      </AButton>
      <AButton type="warning" @click="showNotify({ type: 'warning', position: 'top', showIcon: true, content: 'Warning Icon' })">
        Warning
      </AButton>
      <AButton type="danger" @click="showNotify({ type: 'danger', position: 'top', showIcon: true, content: 'Danger Icon' })">
        Danger
      </AButton>
    </div>
    <div class="p-2">
      Custom
    </div>
    <div p-2 flex="~ gap2 wrap">
      <AButton type="primary" @click="showNotify2({ type: 'primary', position: 'top', content: 'Custom Icon', customIcon: true })">
        Icon
      </AButton>
      <AButton type="success" @click="showNotify2({ type: 'success', position: 'top', content: 'Show Close', showClose: true })">
        Show Close
      </AButton>
      <AButton type="info" @click="showNotify2({ type: 'info', position: 'top' })">
        Slot
      </AButton>
      <AButton
        cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none" type="warning"
        @click="showNotify3({ type: 'warning', position: 'top', content: 'Bg Gradient' })"
      >
        Bg Gradient
      </AButton>
    </div>
  </div>
</template>
