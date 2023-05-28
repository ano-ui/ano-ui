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
    <div class="p-4">
      基础用法
    </div>
    <ANavBar title="标题" />
    <div class="p-4">
      返回按钮
    </div>
    <ANavBar title="标题" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="p-4">
      右边按钮
    </div>
    <ANavBar title="标题" right-text="按钮" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <div class="p-4">
      插槽
    </div>
    <ANavBar :border="false" :clickable="false" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <div flex items-center>
          <image src="../../static/logo.png" mode="scaleToFill" mr-1 h-50rpx w-50rpx />
          AnoUI
        </div>
      </template>
      <template #title>
        标题
      </template>
      <template #right>
        <div class="i-tabler-search a-nav-bar-icon" />
      </template>
    </ANavBar>
    <div class="p-4">
      默认插槽
    </div>
    <ANavBar>
      <AField icon="i-tabler-search" placeholder="搜索内容" cc="h-full p2" class="flex-1" />
      <AButton size="mini" mx-2 variant="light" @click="onClickRight">
        搜索
      </AButton>
    </ANavBar>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: NavBar 导航栏
  navigationStyle: custom
</route>
