<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <div class="bg-white p-2 pb-safe">
    <div class="p-2">
      Color
    </div>
    <div p-2 flex="~ gap2 wrap">
      <ATag>
        Primary
      </ATag>
      <ATag color="success">
        Success
      </ATag>
      <ATag color="info">
        Info
      </ATag>
      <ATag color="warning">
        Warning
      </ATag>
      <ATag color="danger">
        Danger
      </ATag>
    </div>
    <div class="p-2">
      Size
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <ATag>
        Default
      </ATag>
      <ATag color="success" size="xs">
        Mini
      </ATag>
      <ATag color="info" size="sm">
        Small
      </ATag>
      <ATag color="warning" size="md">
        Medium
      </ATag>
      <ATag color="danger" size="lg">
        Large
      </ATag>
    </div>
    <div class="p-2">
      Variant
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <ATag variant="solid">
        Solid
      </ATag>
      <ATag color="success" variant="outline">
        Outline
      </ATag>
      <ATag color="info" variant="ghost">
        Ghost
      </ATag>
      <ATag color="warning" variant="light">
        Light
      </ATag>
      <ATag color="danger" variant="text">
        Text
      </ATag>
    </div>
    <div class="p-2">
      Status
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <!-- TODO: close will remain an <a-tag> but 0x0 -->
      <ATag closable :show="show" @close="show = !show">
        Closable
      </ATag>
      <ATag color="success" disabled>
        Disabled
      </ATag>
    </div>
    <div class="p-2">
      Custom
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <ATag icon="i-carbon-palm-tree" icon-only />
      <ATag color="success" icon-only cc="rounded-full">
        <template #icon>
          <div class="i-carbon-sprout" />
        </template>
      </ATag>
      <ATag color="info" variant="ghost" cc="rounded-md">
        Rounded
      </ATag>
      <ATag color="warning">
        <template #icon>
          <div class="i-carbon-send-alt-filled" />
        </template>
        Send
      </ATag>
      <ATag cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none">
        Bg Gradient
      </ATag>
    </div>
  </div>
</template>

