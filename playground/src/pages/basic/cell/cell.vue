<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Basic
      </div>
      <div>
        <ACell title="Title" value="Content" />
        <ACell value="No Title" />
        <ACell icon="i-carbon-palm-tree" title="Title" value="Content" label="Description Description Description" />
      </div>
      <div class="p-4">
        Custom
      </div>
      <ACellGroup divider>
        <ACell title="Title" value="Rounded Full" cc="rounded-full" />
        <ACell icon="i-carbon-palm-tree" title="Title" value="Content" label="Description" arrow center />
        <ACell title="Slots">
          <template #icon>
            <i class="i-carbon-send-alt" />
          </template>
          <template #value>
            <div>Content slot</div>
          </template>
          <template #label>
            <div>Description slot</div>
          </template>
          <template #right-icon>
            <i class="i-carbon-search" />
          </template>
        </ACell>
      </ACellGroup>
      <div class="p-4">
        Cell Group
      </div>
      <ACellGroup inset arrow divider>
        <ACell title="Title" value="Content" />
        <ACell title="Title" value="Content" />
        <ACell title="Title" value="Content" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>
