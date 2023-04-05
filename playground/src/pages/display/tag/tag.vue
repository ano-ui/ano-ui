<script setup lang="ts">
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Color
      </div>
      <div px-4 flex="~ gap2 wrap">
        <ATag label="Primary" />
        <ATag label="Success" type="success" />
        <ATag label="Info" type="info" />
        <ATag label="Warning" type="warning" />
        <ATag label="Danger" type="danger" />
      </div>

      <div class="p-4">
        Size
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <ATag label="Mini" type="primary" size="mini" />
        <ATag label="Small" type="success" size="small" />
        <ATag label="Normal" type="info" size="normal" />
        <ATag label="Large" type="warning" size="large" />
      </div>

      <div class="p-4">
        Variant
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <ATag label="Solid" variant="solid" />
        <ATag label="Outline" type="success" variant="outline" />
        <ATag label="Ghost" type="info" variant="ghost" />
        <ATag label="Light" type="warning" variant="light" />
        <ATag label="Text" type="danger" variant="text" />
      </div>

      <div class="p-4">
        Status
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
        <!-- TODO: close will remain an <a-tag> but 0x0 -->
        <ATag label="Closable" closable :show="show" @close="show = !show" />
        <ATag label="Disabled" type="success" disabled />
      </div>

      <div class="p-4">
        Custom
      </div>
      <div px-4 flex="~ gap2 wrap" items-center>
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
        <ATag label="Bg Gradient" cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none" />
      </div>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Tag 标签
  </route>
