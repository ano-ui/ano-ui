<script setup lang='ts'>
const { darkMode, customBarHeight, statusBarHeight } = storeToRefs(useAppStore())
</script>

<template>
  <APage class="font-sans" :dark="darkMode">
    <slot />
  </APage>
</template>
