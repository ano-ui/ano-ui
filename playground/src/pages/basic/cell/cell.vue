<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Basic
      </div>
      <div p-2 flex="~ col gap2">
        <ACell title="Title" value="Value" />
        <ACell icon="i-carbon-palm-tree" title="Title" value="Value" label="Label" />
      </div>
      <div class="p-2">
        Status
      </div>
      <div p-2 flex="~ col gap2">
        <ACell title="Title" value="Value" disabled />
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ col gap2">
        <ACell title="Title" value="Value" cc="rounded-none" />
        <ACell icon="i-carbon-palm-tree" title="Title" value="Value" label="Label" arrow />
        <ACell title="Custom">
          <template #icon>
            <i class="i-carbon-send-alt" />
          </template>
          <template #value>
            <AButton size="xs">
              Value
            </AButton>
          </template>
          <template #label>
            <ATag size="sm" variant="ghost" label="Label" />
          </template>
        </ACell>
      </div>
      <div class="p-2">
        Cell Group
      </div>
      <div p-2>
        <ACellGroup>
          <ACell title="Title" value="Value" />
          <ACell title="Title" value="Value" />
          <ACell title="Title" value="Value" />
        </ACellGroup>
      </div>
      <div class="p-2">
        Cell Group With Divider and Not Card
      </div>
      <div p-2>
        <ACellGroup divider :card="false">
          <ACell title="Title" value="Value" />
          <ACell title="Title" value="Value" />
          <ACell title="Title" value="Value" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
