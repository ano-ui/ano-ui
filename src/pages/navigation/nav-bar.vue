<script setup lang="ts">
function onClickLeft() {
  uni.navigateBack()
}

function onClickRight() {
  uni.showToast({
    title: 'Button',
    icon: 'none',
    mask: true,
  })
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <ANavBar
        title="NavBar 导航栏"
        placeholder left-arrow
        :fixed="true" z-index="999"
        @click-left="onClickLeft"
      />
      <div class="p-4">
        Basic
      </div>
      <ANavBar title="Title" />
      <div class="p-4">
        Back
      </div>
      <ANavBar
        title="Title"
        left-text="Back"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="p-4">
        Right Button
      </div>
      <ANavBar
        title="Title"
        left-text="Back"
        right-text="Button"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div class="p-4">
        Use Slot
      </div>
      <ANavBar
        left-text="Back"
        left-arrow
        :border="false"
      >
        <template #title>
          Title
        </template>
        <template #right>
          <div class="i-tabler-search a-nav-bar-icon" />
        </template>
      </ANavBar>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: NavBar 导航栏
  navigationStyle: custom
</route>
