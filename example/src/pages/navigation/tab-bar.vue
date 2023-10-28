<script setup lang="ts">
const active = ref('home')
</script>

<template>
  <UBasePage>
    <div class="p-4">
      基础用法
    </div>
    <ATabBar v-model="active">
      <ATabBarItem name="home" icon="i-tabler-home">
        首页
      </ATabBarItem>
      <ATabBarItem name="discovery" icon="i-tabler-compass">
        发现
      </ATabBarItem>
      <ATabBarItem name="mine" icon="i-tabler-user">
        我的
      </ATabBarItem>
    </ATabBar>

    <div class="p-4">
      自定义
    </div>
    <ATabBar v-model="active">
      <ATabBarItem name="home">
        <template #icon>
          <div class="i-tabler-carrot text-lg" />
        </template>
      </ATabBarItem>
      <ATabBarItem name="discovery">
        <div class="text-lg i-tabler-compass" />
      </ATabBarItem>
      <ATabBarItem name="mine">
        <div class="text-lg i-tabler-user" />
      </ATabBarItem>
    </ATabBar>
    <div mt-2 />
    <ATabBar v-model="active">
      <ATabBarItem name="home">
        首页
      </ATabBarItem>
      <ATabBarItem name="discovery">
        发现
      </ATabBarItem>
      <ATabBarItem name="mine">
        我的
      </ATabBarItem>
    </ATabBar>

    <div class="p-4">
      Fixed
    </div>
    <ATabBar v-model="active" custom-class="fixed bottom-0 pb-safe left-0 right-0">
      <ATabBarItem name="home" icon="i-tabler-home">
        首页
      </ATabBarItem>
      <ATabBarItem name="discovery" icon="i-tabler-compass">
        发现
      </ATabBarItem>
      <ATabBarItem name="mine" icon="i-tabler-user">
        我的
      </ATabBarItem>
    </ATabBar>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: TabBar 标签栏
</route>
