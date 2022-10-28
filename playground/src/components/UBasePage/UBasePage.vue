<script setup lang='ts'>
const { darkMode, customBarHeight, statusBarHeight } = storeToRefs(useAppStore())
</script>

<template>
  <APage :dark="darkMode">
    <slot />
  </APage>
</template>
