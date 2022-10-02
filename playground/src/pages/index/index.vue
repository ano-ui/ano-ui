<script setup lang="ts">
const goBasic = (path: string) => {
  uni.navigateTo({
    url: `/pages/basic/${path}/${path}`,
  })
}
</script>

<template>
  <div class="p4" grid="~ cols-3 gap-4">
    <AButton block @click="goBasic('button')">
      Button
    </AButton>
    <AButton block @click="goBasic('tag')">
      Tag
    </AButton>
  </div>
</template>
