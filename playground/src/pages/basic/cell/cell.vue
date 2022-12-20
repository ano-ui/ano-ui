<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Basic
      </div>
      <div p-2 flex="~ col gap2">
        <ACell title="Title" content="Content" />
        <ACell icon="i-carbon-palm-tree" title="Title" content="Content" description="Description" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ col gap2">
        <ACell title="Title" content="Content" disabled />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ col gap2">
        <ACell title="Title" content="Content" cc="rounded-none" />
        <ACell icon="i-carbon-palm-tree" title="Title" content="Content" description="Description" arrow />
        <ACell title="Custom">
          <template #icon>
            <i class="i-carbon-send-alt" />
          </template>
          <template #content>
            <AButton size="xs">
              Content
            </AButton>
          </template>
          <template #description>
            <ATag variant="ghost" label="Description" />
          </template>
        </ACell>
      </div>
      <div class="p-2">
        Cell Group
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Title" content="Content" />
          <ACell title="Title" content="Content" />
          <ACell title="Title" content="Content" />
        </ACellGroup>
      </div>
      <div class="p-2">
        Cell Group With Divider and Not Card
      </div>
      <div p-2>
        <ACellGroup divider :card="false">
          <ACell title="Title" content="Content" />
          <ACell title="Title" content="Content" />
          <ACell title="Title" content="Content" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
