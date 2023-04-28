<script setup lang="ts">
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
  <div class="h-50px flex a-bg-2 a-text-color" :class="[cc]" :style="cs">
    <slot />
  </div>
</template>
