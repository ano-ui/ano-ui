<script setup lang="ts">
import { ref } from 'vue'

const showValue = ref(false)
const transitionName = ref('')
const show = (name: string) => {
  transitionName.value = name
  showValue.value = true
  setTimeout(() => {
    showValue.value = false
  }, 2000)
}

// eslint-disable-next-line no-console
const log = (msg: string) => console.log(`[${transitionName.value}] ${msg}`)
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <ATransition
        :show="showValue" :name="transitionName" :duration="1000" timing-function="ease-in-out"
        cc="fixed top-50 bottom-50 left-20 right-20 h-50 z-200 bg-primary rounded-lg flex items-center justify-center"
        @before-enter="log('before-enter')" @enter="log('enter')" @after-enter="log('after-enter')"
        @before-leave="log('before-leave')" @leave="log('leave')" @after-leave="log('after-leave')"
      >
        <div class="text-center text-white">
          Content
        </div>
      </ATransition>

      <div class="p-2">
        Basic
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Fade" arrow @click="show('fade')" />
          <ACell title="Fade Up" arrow @click="show('fade-up')" />
          <ACell title="Fade Down" arrow @click="show('fade-down')" />
          <ACell title="Fade Left" arrow @click="show('fade-left')" />
          <ACell title="Fade Right" arrow @click="show('fade-right')" />
          <ACell title="Slide Up" arrow @click="show('slide-up')" />
          <ACell title="Slide Down" arrow @click="show('slide-down')" />
          <ACell title="Slide Left" arrow @click="show('slide-left')" />
          <ACell title="Slide Right" arrow @click="show('slide-right')" />
          <ACell title="Zoom" arrow @click="show('zoom')" />
          <ACell title="Fade Zoom" arrow @click="show('fade-zoom')" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
