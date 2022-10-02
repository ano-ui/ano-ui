<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <div class="bg-white p-2 pb-safe">
    <div class="p-2">
      Type
    </div>
    <div p-2 flex="~ gap2 wrap">
      <ATag>
        Primary
      </ATag>
      <ATag type="success">
        Success
      </ATag>
      <ATag type="info">
        Info
      </ATag>
      <ATag type="warning">
        Warning
      </ATag>
      <ATag type="danger">
        Danger
      </ATag>
    </div>
    <div class="p-2">
      Size
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <ATag>
        Medium
      </ATag>
      <ATag type="success" size="xs">
        Mini
      </ATag>
      <ATag type="info" size="sm">
        Small
      </ATag>
      <ATag type="warning" size="md">
        Medium
      </ATag>
      <ATag type="danger" size="lg">
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
      <ATag type="success" variant="outline">
        Outline
      </ATag>
      <ATag type="info" variant="ghost">
        Ghost
      </ATag>
      <ATag type="warning" variant="light">
        Light
      </ATag>
      <ATag type="danger" variant="text">
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
      <ATag type="success" disabled>
        Disabled
      </ATag>
    </div>
    <div class="p-2">
      Custom
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <ATag icon="i-carbon-palm-tree" icon-only />
      <ATag type="success" icon-only cc="rounded-full">
        <template #icon>
          <div class="i-carbon-sprout" />
        </template>
      </ATag>
      <ATag type="info" variant="ghost" cc="rounded-md">
        Rounded
      </ATag>
      <ATag type="warning">
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

