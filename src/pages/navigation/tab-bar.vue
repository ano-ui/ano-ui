<script setup lang="ts">
const active = ref('home')
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Basic
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
        Custom
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
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: TabBar 标签栏
</route>
