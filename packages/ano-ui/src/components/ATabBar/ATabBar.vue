<script setup lang="ts">
import { nextTick, provide, reactive, toRefs } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../constants'
import { tabBarKey } from '../tokens/tabbar'
import type { TabBarProps } from './tab-bar'
import { tabBarEmits, tabBarProps } from './tab-bar'

const props = defineProps(tabBarProps)
const emit = defineEmits(tabBarEmits)

function changeEvent(value: TabBarProps['modelValue']) {
  emit(UPDATE_MODEL_EVENT, value)
  nextTick(() => emit(CHANGE_EVENT, value))
}

provide(tabBarKey,
  reactive({
    ...toRefs(props),
    changeEvent,
  }),
)
</script>

<template>
  <div class="flex a-bg-2 a-text-color h-100rpx [&>.a-tab-bar-item]:flex-1 [&>a-tab-bar-item]:flex-1" :class="[cc]" :style="cs">
    <slot />
  </div>
</template>
