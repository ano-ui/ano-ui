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
    <div class="pb-safe">
      <div class="p-4">
        Basic
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AAvatar :src="image" size="mini" />
        <AAvatar :src="image" size="small" />
        <AAvatar src="https://pic2.imgdb.cn/item/644bf3c40d2dde5777ab58cb.png" size="normal" />
        <AAvatar :src="image" size="large" />
        <AAvatar :src="image" h-16 w-16 />
      </div>

      <div class="p-4">
        Round
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AAvatar :src="image" rounded-full size="mini" />
        <AAvatar :src="image" rounded-full size="small" />
        <AAvatar :src="image" rounded-full size="normal" />
        <AAvatar :src="image" rounded-full size="large" />
      </div>

      <div class="p-4">
        Custom
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AAvatar rounded-full bg-primary text-white>
          T
        </AAvatar>
        <AAvatar border="~ 2 solid white" rounded-full bg-primary text-white>
          <div class="i-tabler-loader" />
        </AAvatar>
      </div>
      <div class="p-4">
        Group
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AAvatarGroup :max="3" :options="options" />
      </div>
      <div flex="~ gap2 wrap" items-center px-4 pt-4>
        <AAvatarGroup :max="3" :options="options">
          <template #avatar="{ option: { src } }">
            <AAvatar rounded-full :src="src" />
          </template>
          <template #reset="{ reset }">
            <AAvatar z-1 rounded-full bg-primary text-white>
              +{{ reset }}
            </AAvatar>
          </template>
        </AAvatarGroup>
      </div>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Avatar 头像
</route>
