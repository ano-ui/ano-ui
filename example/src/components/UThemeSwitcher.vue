<script lang="ts" setup>
const { darkMode } = storeToRefs(useAppStore())
</script>

<template>
  <AButton
    :icon="darkMode ? 'i-tabler-sun' : 'i-tabler-moon'" variant="text" cc="color-inherit"
    @click="darkMode = !darkMode"
  />
</template>
