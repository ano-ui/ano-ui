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
      <div p-2 flex="~ gap2 wrap">
        <AButton @click="showNotify({ type: 'primary', position: 'default', message: 'Notify' })">
          Show Notify
        </AButton>
      </div>
      <div class="p-2">
        Position
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton type="primary" @click="showNotify({ position: 'default', message: 'Default' })">
          Default
        </AButton>
        <AButton type="success" @click="showNotify({ position: 'top', message: 'Top' })">
          Top
        </AButton>
        <AButton type="info" @click="showNotify({ position: 'top-left', message: 'Top Left' })">
          Top Left
        </AButton>
        <AButton type="warning" @click="showNotify({ position: 'top-right', message: 'Top Right' })">
          Top Right
        </AButton>
        <AButton type="danger" @click="showNotify({ position: 'bottom', message: 'Bottom' })">
          Bottom
        </AButton>
        <AButton type="primary" @click="showNotify({ position: 'bottom-left', message: 'Bottom Left' })">
          Bottom Left
        </AButton>
        <AButton type="success" @click="showNotify({ position: 'bottom-right', message: 'Bottom Left' })">
          Bottom Right
        </AButton>
      </div>
      <div class="p-2">
        Type Icon
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton type="primary" @click="showNotify({ type: 'primary', position: 'top', showIcon: true, message: 'Primary Icon' })">
          Primary
        </AButton>
        <AButton type="success" @click="showNotify({ type: 'success', position: 'top', showIcon: true, message: 'Success Icon' })">
          Success
        </AButton>
        <AButton type="info" @click="showNotify({ type: 'info', position: 'top', showIcon: true, message: 'Info Icon' })">
          Info
        </AButton>
        <AButton type="warning" @click="showNotify({ type: 'warning', position: 'top', showIcon: true, message: 'Warning Icon' })">
          Warning
        </AButton>
        <AButton type="danger" @click="showNotify({ type: 'danger', position: 'top', showIcon: true, message: 'Danger Icon' })">
          Danger
        </AButton>
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap">
        <AButton type="primary" @click="showNotify2({ type: 'primary', position: 'top', message: 'Custom Icon', customIcon: true })">
          Icon
        </AButton>
        <AButton type="success" @click="showNotify2({ type: 'success', position: 'top', message: 'Show Close', showClose: true })">
          Show Close
        </AButton>
        <AButton type="info" @click="showNotify2({ type: 'info', position: 'top' })">
          Slot
        </AButton>
        <AButton
          cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none" type="warning"
          @click="showNotify3({ type: 'warning', position: 'top', message: 'Bg Gradient' })"
        >
          Bg Gradient
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
