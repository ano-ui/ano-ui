<script setup lang='ts'>
const { darkMode, customBarHeight, statusBarHeight } = storeToRefs(useAppStore())
</script>

<template>
  <div :class="darkMode ? 'dark' : ''">
    <slot />
  </div>
</template>
