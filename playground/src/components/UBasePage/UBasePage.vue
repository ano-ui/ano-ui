<script setup lang='ts'>
const { darkMode, customBarHeight, statusBarHeight } = storeToRefs(useAppStore())
</script>

<template>
  <div :class="darkMode ? 'dark' : ''">
    <div class="a-bg-base">
      <slot />
    </div>
  </div>
</template>
