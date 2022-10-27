<script setup lang="ts">
import { ref } from 'vue'
const show = ref(true)
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Color
      </div>
      <div p-2 flex="~ gap2 wrap">
        <ATag label="Primary" />
        <ATag label="Success" color="success" />
        <ATag label="Info" color="info" />
        <ATag label="Warning" color="warning" />
        <ATag label="Danger" color="danger" />
      </div>
      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ATag label="Default" />
        <ATag label="Mini" color="success" size="xs" />
        <ATag label="Small" color="info" size="sm" />
        <ATag label="Medium" color="warning" size="md" />
        <ATag label="Large" color="danger" size="lg" />
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ATag label="Solid" variant="solid" />
        <ATag label="Outline" color="success" variant="outline" />
        <ATag label="Ghost" color="info" variant="ghost" />
        <ATag label="Light" color="warning" variant="light" />
        <ATag label="Text" color="danger" variant="text" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <!-- TODO: close will remain an <a-tag> but 0x0 -->
        <ATag label="Closable" closable :show="show" @close="show = !show" />
        <ATag label="Disabled" color="success" disabled />
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
        <ATag label="Rounded" color="info" variant="ghost" cc="rounded-md" />
        <ATag label="Send" color="warning">
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
        </ATag>
        <ATag label="Bg Gradient" cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-white" />
      </div>
    </div>
  </UBasePage>
</template>

