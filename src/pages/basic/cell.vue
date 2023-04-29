<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Basic 基础
      </div>
      <div>
        <ACell title="Title" value="Content" />
        <ACell value="No Title" />
        <ACell icon="i-tabler-carrot" title="Title" value="Content" label="Description Description Description" />
      </div>
      <div class="p-4">
        Custom 自定义
      </div>
      <ACellGroup divider>
        <ACell icon="i-tabler-carrot" title="Title" value="Content" label="Description" arrow />
        <ACell title="Slots">
          <template #icon>
            <i class="i-tabler-carrot" />
          </template>
          <template #value>
            <div>Content slot</div>
          </template>
          <template #label>
            <div>Description slot</div>
          </template>
          <template #right-icon>
            <i class="i-tabler-search" />
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

<route lang="yaml">
style:
  navigationBarTitleText: Cell 单元格
</route>
