<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Basic
      </div>
      <div>
        <ACell title="Title" value="Value" />
        <ACell icon="i-carbon-palm-tree" title="Title" value="Value" label="Label" />
      </div>
      <div class="p-4">
        Custom
      </div>
      <div>
        <ACellGroup divider>
          <ACell title="Title" value="Value" cc="rounded-none" />
          <ACell icon="i-carbon-palm-tree" title="Title" value="Value" label="Label" arrow />
          <ACell title="Custom">
            <template #icon>
              <i class="i-carbon-send-alt" />
            </template>
            <template #value>
              <ATag size="sm" variant="ghost" label="Value" />
            </template>
            <template #label>
              <ATag size="sm" variant="ghost" label="Label" />
            </template>
          </ACell>
        </ACellGroup>
      </div>
      <div class="p-4">
        Cell Group
      </div>
      <div>
        <ACellGroup inset arrow divider>
          <ACell title="Title" value="Value" />
          <ACell title="Title" value="Value" />
          <ACell title="Title" value="Value" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
