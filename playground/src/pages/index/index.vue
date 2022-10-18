<script setup lang="ts">
const goBasic = (path: string) => {
  uni.navigateTo({
    url: `/pages/basic/${path}/${path}`,
  })
}

const goForm = (path: string) => {
  uni.navigateTo({
    url: `/pages/form/${path}/${path}`,
  })
}
</script>

<template>
  <UBasePage>
    <div class="p4" grid="~ cols-3 gap-4">
      <AButton block @click="goBasic('button')">
        Button
      </AButton>
      <AButton block @click="goBasic('tag')">
        Tag
      </AButton>
      <AButton block @click="goBasic('overlay')">
        Overlay
      </AButton>
      <AButton block @click="goBasic('notify')">
        Notify
      </AButton>
      <AButton block @click="goBasic('notice-bar')">
        NoticeBar
      </AButton>
      <AButton block @click="goBasic('cell')">
        Cell
      </AButton>
      <AButton block @click="goForm('input')">
        Input
      </AButton>
    </div>
  </UBasePage>
</template>
