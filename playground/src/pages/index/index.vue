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
      <AButton type="secondary">
        Secondary
      </AButton>
      <AButton type="success">
        Success
      </AButton>
      <AButton type="warning">
        Warning
      </AButton>
      <AButton type="danger">
        Danger
      </AButton>
      <AButton type="info">
        Info
      </AButton>
    </div>
    <div class="p-2">
      Size
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <AButton>
        Medium
      </AButton>
      <AButton type="secondary" size="xs">
        Mini
      </AButton>
      <AButton type="success" size="sm">
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
      <AButton type="secondary" variant="outline">
        Outline
      </AButton>
      <AButton type="success" variant="ghost">
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
      <AButton type="secondary" disabled>
        Disabled
      </AButton>
    </div>
    <div class="p-2">
      Custom
    </div>
    <div p-2 flex="~ gap2 wrap" items-center>
      <AButton icon="i-carbon-palm-tree" icon-only />
      <AButton type="secondary" icon-only cc="rounded-full">
        <template #icon>
          <div class="i-carbon-sprout" />
        </template>
      </AButton>
      <AButton type="success" cc="rounded-full">
        Rounded-full
      </AButton>
      <AButton type="warning" cc="rounded-full">
        <template #icon>
          <div class="i-carbon-send-alt-filled" />
        </template>
        Send
      </AButton>
    </div>
  </div>
</template>
