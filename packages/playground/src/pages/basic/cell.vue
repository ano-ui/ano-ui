<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        基础用法
      </div>
      <div>
        <ACell title="单元格" value="内容" />
        <ACell value="无标题内容" />
        <ACell icon="i-tabler-carrot" title="单元格" value="内容" label="描述信息" />
      </div>
      <div class="p-4">
        自定义
      </div>
      <ACellGroup divider>
        <ACell icon="i-tabler-carrot" title="单元格" value="内容" label="描述信息" arrow />
        <ACell title="单元格">
          <template #icon>
            <i class="i-tabler-carrot" />
          </template>
          <template #value>
            <div>内容插槽</div>
          </template>
          <template #label>
            <div>描述信息插槽</div>
          </template>
          <template #right-icon>
            <i class="i-tabler-search" />
          </template>
        </ACell>
      </ACellGroup>
      <div class="p-4">
        单元格组
      </div>
      <ACellGroup inset arrow divider>
        <ACell title="单元格" value="内容" />
        <ACell title="单元格" value="内容" />
        <ACell title="单元格" value="内容" />
      </ACellGroup>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Cell 单元格
</route>
