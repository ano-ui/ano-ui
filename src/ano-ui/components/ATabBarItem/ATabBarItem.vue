<script setup lang="ts">
import { tabBarItemEmits, tabBarItemProps } from './tab-bar-item'
import { useTabBarItem } from './use-tab-bar-item'

const props = defineProps(tabBarItemProps)
const emit = defineEmits(tabBarItemEmits)

const { toggle, active } = useTabBarItem(props, emit)
</script>

<template>
  <div
    class="h-full flex flex-col items-center justify-center text-sm text-context transition-all"
    :class="[{ 'a-primary': active }, cc]" :style="cs" @click="toggle"
  >
    <slot name="icon">
      <div v-if="icon" class="text-xl" :class="icon" />
    </slot>
    <slot />
  </div>
</template>
