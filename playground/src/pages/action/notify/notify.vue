<script setup lang="ts">
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

const topStyle = computed(() => {
  let top = '0px'
  // #ifdef H5
  // H5默认导航栏高度为44px
  top = '44px'
  // #endif
  return {
    top,
  }
})
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <ANotify ref="notify" :cs="topStyle" />
      <ANotify ref="notify2" :cs="topStyle">
        <template #icon>
          <div class="i-carbon-send-alt-filled" />
        </template>
        Slot
      </ANotify>
      <ANotify ref="notify3" :cs="topStyle" ccc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none" />

      <div class="p-4">
        Notify
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="Show" @click="showNotify({ type: 'primary', position: 'default', message: 'Notify' })" />
      </ACellGroup>

      <div class="p-4">
        Position
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="Default" @click="showNotify({ position: 'default', message: 'Default' })" />
        <ACell title="Top" @click="showNotify({ position: 'top', message: 'Top' })" />
        <ACell title="Top Left" @click="showNotify({ position: 'top-left', message: 'Top Left' })" />
        <ACell title="Top Right" @click="showNotify({ position: 'top-right', message: 'Top Right' })" />
        <ACell title="Bottom" @click="showNotify({ position: 'bottom', message: 'Bottom' })" />
        <ACell title="Bottom Left" @click="showNotify({ position: 'bottom-left', message: 'Bottom Left' })" />
        <ACell title="Bottom Right" @click="showNotify({ position: 'bottom-right', message: 'Bottom Right' })" />
      </ACellGroup>

      <div class="p-4">
        Type Icon
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="Primary" @click="showNotify({ type: 'primary', showIcon: true, message: 'Primary Icon' })" />
        <ACell title="Success" @click="showNotify({ type: 'success', showIcon: true, message: 'Success Icon' })" />
        <ACell title="Info" @click="showNotify({ type: 'info', showIcon: true, message: 'Info Icon' })" />
        <ACell title="Warning" @click="showNotify({ type: 'warning', showIcon: true, message: 'Warning Icon' })" />
        <ACell title="Danger" @click="showNotify({ type: 'danger', showIcon: true, message: 'Danger Icon' })" />
      </ACellGroup>

      <div class="p-4">
        Custom
      </div>
      <ACellGroup arrow divider inset>
        <ACell title="Custom Icon" @click="showNotify2({ type: 'primary', position: 'top', message: 'Custom Icon', customIcon: true })" />
        <ACell title="Show Close" @click="showNotify2({ type: 'success', position: 'top', message: 'Show Close', showClose: true })" />
        <ACell title="Slot" @click="showNotify2({ type: 'info', position: 'top' })" />
        <ACell title="Bg Gradient" @click="showNotify3({ type: 'warning', position: 'top', message: 'Bg Gradient' })" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>
