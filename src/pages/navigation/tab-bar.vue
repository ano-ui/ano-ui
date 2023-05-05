<script setup lang="ts">
const active = ref('home')
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
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
          <div class="i-tabler-compass text-lg" />
        </ATabBarItem>
        <ATabBarItem name="mine">
          <div class="i-tabler-user text-lg" />
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
      <ATabBar v-model="active" cc="fixed bottom-0 pb-safe left-0 right-0">
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
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: TabBar 标签栏
</route>
