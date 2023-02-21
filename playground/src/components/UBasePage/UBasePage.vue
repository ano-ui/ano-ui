<script setup lang='ts'>
const { darkMode } = storeToRefs(useAppStore())
</script>

<template>
  <APage class="font-sans" :dark="darkMode">
    <slot />
  </APage>
</template>
