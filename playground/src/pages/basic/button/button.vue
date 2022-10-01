<script setup lang="ts">

</script>

<template>
  <div class="bg-white p-2">
    <div class="p-2">
      Type
    </div>
    <div p-2 flex="~ gap2 wrap">
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
      <AButton>
        Medium
      </AButton>
      <AButton type="success" size="xs">
        Mini
      </AButton>
      <AButton type="info" size="sm">
        Small
      </AButton>
      <AButton type="warning" size="md">
        Medium
      </AButton>
      <AButton type="danger" size="lg">
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
      <AButton type="danger" variant="light">
        Light
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
          <div class="i-carbon-send-alt-filled" />
        </template>
        Send
      </AButton>
    </div>
    <AButton type="danger" block>
      Block
    </AButton>
    <AButton mt2 block cc="bg-gradient-to-r from-indigo-500 to-pink-500 border-none">
      Bg Gradient
    </AButton>
  </div>
</template>
