<script setup lang="ts">
import { ref } from 'vue'

const showValue = ref(false)
const transitionName = ref('')
function show(name: string) {
  transitionName.value = name
  showValue.value = true
}

function log(msg: string) {
  // eslint-disable-next-line no-console
  return console.log(`[${transitionName.value}] ${msg}`)
}
</script>

<template>
  <UBasePage>
    <ATransition
      :show="showValue" :name="transitionName" :duration="200" timing-function="ease-in"
      cc="fixed top-50 bottom-50 left-20 right-20 h-50 z-200 bg-primary rounded-lg flex items-center justify-center" @before-enter="log('before-enter')"
      @enter="log('enter')" @after-enter="log('after-enter')" @before-leave="log('before-leave')" @leave="log('leave')"
      @after-leave="log('after-leave')"
    >
      <div
        class="h-full w-full flex items-center justify-center text-white"
        @click="showValue = false"
      >
        内容
      </div>
    </ATransition>

    <div class="p-4">
      基础用法
    </div>
    <ACellGroup inset divider arrow>
      <ACell title="Fade" @click="show('fade')" />
      <ACell title="Fade Up" @click="show('fade-up')" />
      <ACell title="Fade Down" @click="show('fade-down')" />
      <ACell title="Fade Left" @click="show('fade-left')" />
      <ACell title="Fade Right" @click="show('fade-right')" />
      <ACell title="Slide Up" @click="show('slide-up')" />
      <ACell title="Slide Down" @click="show('slide-down')" />
      <ACell title="Slide Left" @click="show('slide-left')" />
      <ACell title="Slide Right" @click="show('slide-right')" />
      <ACell title="Zoom" @click="show('zoom')" />
    </ACellGroup>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Transition 动画
</route>
