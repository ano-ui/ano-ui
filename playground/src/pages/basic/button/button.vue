<script setup lang="ts">
const handleSuccess = (e: MouseEvent) => {
  // eslint-disable-next-line no-console
  console.log('success')
}
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
        <AButton type="success" @click="handleSuccess">
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
        <AButton type="primary" size="xs">
          Extra Mini
        </AButton>
        <AButton type="success" size="sm">
          Mini
        </AButton>
        <AButton type="info" size="md">
          Small
        </AButton>
        <AButton type="warning" size="lg">
          Medium
        </AButton>
        <AButton type="danger" size="xl">
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
        <AButton icon="i-carbon-palm-tree" icon-only />
        <AButton type="success" icon-only cc="rounded-full">
          <template #icon>
            <div class="i-carbon-sprout" />
          </template>
        </AButton>
        <AButton type="info" cc="rounded-full">
          Rounded
        </AButton>
        <AButton type="warning">
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
          Send
        </AButton>
        <AButton cc="bg-teal border-teal" open-type="getUserInfo" @click="getInfo">
          OpenType
        </AButton>
      </div>
      <div p-2>
        <AButton type="danger" block>
          Block
        </AButton>
        <AButton size="lg" mt2 block :cc="['bg-gradient-to-r', 'from-indigo-500', 'to-pink-500', 'border-none']">
          Bg Gradient
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
