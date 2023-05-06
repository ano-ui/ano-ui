<script setup lang="ts">
import { ref } from 'vue'
import type { PositionType } from '~/ano-ui'

const showValue = ref(false)
const position = ref<PositionType>('center')

function handleShow(p: PositionType) {
  showValue.value = true
  position.value = p
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
      <APopup
        v-model:show="showValue" :position="position" :duration="300"
        :cs="[position === 'top' || position === 'left' || position === 'right' ? topStyle : '']"
      >
        <div class="flex items-center justify-center text-white h-100px w-200px bg-primary">
          内容
        </div>
      </APopup>

      <div class="p-4">
        基础用法
      </div>
      <ACellGroup inset divider arrow>
        <ACell title="展示弹出层" arrow @click="handleShow('center')" />
      </ACellGroup>
      <div class="p-4">
        位置
      </div>
      <ACellGroup inset divider arrow>
        <ACell title="顶部弹出" @click="handleShow('top')" />
        <ACell title="底部弹出" @click="handleShow('bottom')" />
        <ACell title="左侧弹出" @click="handleShow('left')" />
        <ACell title="右侧弹出" @click="handleShow('right')" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Popup 弹出层
</route>
