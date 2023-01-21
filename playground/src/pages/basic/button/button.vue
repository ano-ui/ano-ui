<script setup lang="ts">
const getInfo = () => {
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
    <div class="p-2 pb-safe">
      <div class="p-2">
        Color
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
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
      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
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
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
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
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <AButton loading>
          Loading
        </AButton>
        <AButton type="success" disabled>
          Disabled
        </AButton>
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <AButton icon="i-carbon-palm-tree" />
        <AButton type="success" square>
          Square
        </AButton>
        <AButton type="info" round>
          Round
        </AButton>
        <AButton type="warning" icon="i-carbon-send-alt">
          Send
        </AButton>
        <AButton cc="bg-teal border-teal" open-type="getUserInfo" @click="getInfo">
          OpenType
        </AButton>
        <AButton :cc="['bg-gradient-to-r', 'from-indigo-500', 'to-pink-500', 'border-none']">
          Bg Gradient
        </AButton>
      </div>
      <div p-2>
        <AButton type="danger" block>
          Block
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
