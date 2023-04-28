<script setup lang="ts">
import { tabBarItemEmits, tabBarItemProps } from './tab-bar-item'
import { useTabBarItem } from './use-tab-bar-item'

const props = defineProps(tabBarItemProps)
const emit = defineEmits(tabBarItemEmits)

const { toggle, active } = useTabBarItem(props, emit)
</script>

<template>
  <div
    class="flex flex-1 flex-col items-center justify-center py-1 text-sm text-context transition-all"
    :class="[{ 'a-primary': active }, cc]" :style="cs" @click="toggle"
  >
    <div v-if="!$slots.icon" class="text-xl" :class="icon" />
    <slot name="icon" />
    <slot />
  </div>
</template>
