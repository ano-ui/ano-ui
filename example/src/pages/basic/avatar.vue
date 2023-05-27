<script setup lang="ts">
const image = 'https://pic2.imgdb.cn/item/644bf4470d2dde5777abf840.webp'
const options = ref([
  { src: image },
  { src: image },
  { src: image },
  { src: image },
  { src: image },
])
</script>

<template>
  <UBasePage>
    <div class="p-4">
      基础
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AAvatar :src="image" size="mini" />
      <AAvatar :src="image" size="small" />
      <AAvatar src="https://pic2.imgdb.cn/item/644bf3c40d2dde5777ab58cb.png" size="normal" />
      <AAvatar :src="image" size="large" />
      <AAvatar :src="image" cc="h-16 w-16" />
    </div>

    <div class="p-4">
      圆形
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AAvatar :src="image" cc="rounded-full" size="mini" />
      <AAvatar :src="image" cc="rounded-full" size="small" />
      <AAvatar :src="image" cc="rounded-full" size="normal" />
      <AAvatar :src="image" cc="rounded-full" size="large" />
    </div>

    <div class="p-4">
      自定义
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AAvatar cc="rounded-full bg-primary text-white">
        T
      </AAvatar>
      <AAvatar cc="rounded-full bg-primary text-white">
        <div class="i-tabler-loader" />
      </AAvatar>
    </div>
    <div class="p-4">
      头像组
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <AAvatarGroup :max="3" :options="options" />
    </div>
    <div flex="~ gap2 wrap" items-center px-4 pt-4>
      <AAvatarGroup :max="3" :options="options">
        <template #avatar="{ option: { src } }">
          <AAvatar cc="rounded-full" :src="src" />
        </template>
        <template #reset="{ reset }">
          <AAvatar cc="z-1 rounded-full bg-primary text-white">
            +{{ reset }}
          </AAvatar>
        </template>
      </AAvatarGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Avatar 头像
</route>
