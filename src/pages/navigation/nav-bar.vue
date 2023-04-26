<script setup lang="ts">
function onClickLeft() {
  const pages = getCurrentPages()
  if (pages.length > 1) {
    uni.navigateBack()
  }
  else {
    uni.redirectTo({
      url: '/',
    })
  }
}

function onClickRight() {
  uni.showToast({
    title: 'Click',
    icon: 'none',
  })
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <ANavBar
        title="NavBar 导航栏"
        left-arrow placeholder
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
        right-text="Button"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <div class="p-4">
        Use Slot
      </div>
      <ANavBar
        :border="false"
        :clickable="false"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          <div flex items-center>
            <image
              src="../../static/logo.png"
              mode="scaleToFill"
              mr-1 h-50rpx w-50rpx
            />
            AnoUI
          </div>
        </template>
        <template #title>
          Title
        </template>
        <template #right>
          <div class="i-tabler-search a-nav-bar-icon" />
        </template>
      </ANavBar>
      <div class="p-4">
        Use Default Slot
      </div>
      <ANavBar>
        <AField icon="i-tabler-search" placeholder="Enter something" cc="h-full p2" class="flex-1" />
        <AButton size="mini" mx-2 variant="light" @click="onClickRight">
          Search
        </AButton>
      </ANavBar>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: NavBar 导航栏
  navigationStyle: custom
</route>
