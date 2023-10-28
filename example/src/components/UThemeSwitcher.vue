<script lang="ts" setup>
const { darkMode } = storeToRefs(useAppStore())
</script>

<template>
  <AButton
    type="primary" :icon="darkMode ? 'i-tabler-sun' : 'i-tabler-moon'" variant="text" custom-class="color-inherit"
    @click="darkMode = !darkMode"
  />
</template>
