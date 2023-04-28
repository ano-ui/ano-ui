<script setup lang="ts">
function getInfo() {
  uni.getUserInfo({
    success: (res) => {
      // eslint-disable-next-line no-console
      console.log(res)
    },
  })
}
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Color
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AButton>
          Primary
        </AButton>
        <AButton type="success">
          Success
        </AButton>
        <AButton type="info">
          Info
        </AButton>
        <AButton type="warning">
          Warning
        </AButton>
        <AButton type="danger">
          Danger
        </AButton>
      </div>
      <div class="p-4">
        Size
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AButton type="primary" size="mini">
          Mini
        </AButton>
        <AButton type="success" size="small">
          Small
        </AButton>
        <AButton type="info" size="normal">
          Normal
        </AButton>
        <AButton type="warning" size="large">
          Large
        </AButton>
      </div>
      <div class="p-4">
        Variant
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AButton variant="solid">
          Solid
        </AButton>
        <AButton type="success" variant="outline">
          Outline
        </AButton>
        <AButton type="info" variant="ghost">
          Ghost
        </AButton>
        <AButton type="warning" variant="light">
          Light
        </AButton>
        <AButton type="danger" variant="text">
          Text
        </AButton>
      </div>
      <div class="p-4">
        Status
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AButton loading>
          Loading
        </AButton>
        <AButton type="success" disabled>
          Disabled
        </AButton>
      </div>
      <div class="p-4">
        Custom
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AButton icon="i-tabler-carrot" />
        <AButton type="success" square>
          S
        </AButton>
        <AButton type="info" round>
          Round
        </AButton>
        <AButton type="warning" icon="i-tabler-send">
          Send
        </AButton>
        <AButton cc="bg-teal border-teal" open-type="getUserInfo" @click="getInfo">
          OpenType
        </AButton>
        <AButton :cc="['bg-gradient-to-r', 'from-indigo-500', 'to-pink-500']">
          Bg Gradient
        </AButton>
      </div>
      <div mt-2 px-4>
        <AButton type="danger" block>
          Block
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Button 按钮
</route>
