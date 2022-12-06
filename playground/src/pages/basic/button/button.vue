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
        <AButton color="success" @click="handleSuccess">
          Success
        </AButton>
        <AButton color="info">
          Info
        </AButton>
        <AButton color="warning">
          Warning
        </AButton>
        <AButton color="danger">
          Danger
        </AButton>
      </div>
      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <AButton color="primary" size="xs">
          Extra Mini
        </AButton>
        <AButton color="success" size="sm">
          Mini
        </AButton>
        <AButton color="info" size="md">
          Small
        </AButton>
        <AButton color="warning" size="lg">
          Medium
        </AButton>
        <AButton color="danger" size="xl">
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
        <AButton color="success" variant="outline">
          Outline
        </AButton>
        <AButton color="info" variant="ghost">
          Ghost
        </AButton>
        <AButton color="warning" variant="light">
          Light
        </AButton>
        <AButton color="danger" variant="text">
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
        <AButton color="success" disabled>
          Disabled
        </AButton>
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <AButton icon="i-carbon-palm-tree" icon-only />
        <AButton color="success" icon-only cc="rounded-full">
          <template #icon>
            <div class="i-carbon-sprout" />
          </template>
        </AButton>
        <AButton color="info" cc="rounded-full">
          Rounded
        </AButton>
        <AButton color="warning">
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
        <AButton color="danger" block>
          Block
        </AButton>
        <AButton size="lg" mt2 block :cc="['bg-gradient-to-r', 'from-indigo-500', 'to-pink-500', 'border-none']">
          Bg Gradient
        </AButton>
      </div>
    </div>
  </UBasePage>
</template>
