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
        <ATag label="Success" type="success" />
        <ATag label="Info" type="info" />
        <ATag label="Warning" type="warning" />
        <ATag label="Danger" type="danger" />
      </div>
      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ATag label="Extra Mini" type="primary" size="xs" />
        <ATag label="Mini" type="success" size="sm" />
        <ATag label="Small" type="info" size="md" />
        <ATag label="Medium" type="warning" size="lg" />
        <ATag label="Large" type="danger" size="xl" />
      </div>
      <div class="p-2">
        Variant
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ATag label="Solid" variant="solid" />
        <ATag label="Outline" type="success" variant="outline" />
        <ATag label="Ghost" type="info" variant="ghost" />
        <ATag label="Light" type="warning" variant="light" />
        <ATag label="Text" type="danger" variant="text" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <!-- TODO: close will remain an <a-tag> but 0x0 -->
        <ATag label="Closable" closable :show="show" @close="show = !show" />
        <ATag label="Disabled" type="success" disabled />
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
        <ATag label="Rounded" type="info" variant="ghost" cc="rounded-full" />
        <ATag label="Send" type="warning">
          <template #icon>
            <div class="i-carbon-send-alt" />
          </template>
        </ATag>
        <ATag label="Bg Gradient" cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-white" />
      </div>
    </div>
  </UBasePage>
</template>
