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
        <ACell icon="i-carbon-palm-tree" title="Title" value="Content" label="Description Description Description" />
      </div>
      <div class="p-4">
        Custom
      </div>
      <div>
        <ACellGroup divider>
          <ACell title="Title" value="Content" cc="rounded-none" />
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
      </div>
      <div class="p-4">
        Cell Group
      </div>
      <div>
        <ACellGroup inset arrow divider>
          <ACell title="Title" value="Content" />
          <ACell title="Title" value="Content" />
          <ACell title="Title" value="Content" />
        </ACellGroup>
      </div>
    </div>
  </UBasePage>
</template>
