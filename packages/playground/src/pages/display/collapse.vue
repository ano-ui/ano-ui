<script setup lang="ts">

</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Basic
      </div>
      <AACollapse>
        <AACollapseItem title="Hi" name="1">
          今天晚饭吃什么？
        </AACollapseItem>
        <AACollapseItem title="May be?" name="2">
          小龙虾
        </AACollapseItem>
      </AACollapse>

      <div class="p-4">
        Accordion
      </div>
      <AACollapse accordion>
        <AACollapseItem title="Francis Bacon's saying" name="1">
          有些书应该细细品味，有些书应该吞噬，但只有少数书应该被细嚼慢咽、彻底消化。
        </AACollapseItem>
        <AACollapseItem title="Francis Bacon's saying" name="2">
          如果一个人以确定性开始，他将以怀疑结束；但如果他满足于以怀疑开始，他将以确定结束。
        </AACollapseItem>
      </AACollapse>

      <div class="p-4">
        Custom
      </div>
      <AACollapse accordion>
        <AACollapseItem icon="i-tabler-carrot" title="Title" value="Content" label="Description" name="0">
          这是一个内容
        </AACollapseItem>
        <AACollapseItem title="Slots" name="1">
          <template #icon>
            <div class="i-tabler-carrot" />
          </template>
          <template #value>
            <span class="text-gray">Content</span>
          </template>
          <template #label>
            <div class="text-gray">
              Description slot
            </div>
          </template>
          这是一个内容
        </AACollapseItem>
      </AACollapse>

      <div class="p-4">
        Disabled
      </div>
      <AACollapse accordion>
        <AACollapseItem title="青铜" name="1">
          可以
        </AACollapseItem>
        <AACollapseItem disabled title="白银" name="2">
          很好
        </AACollapseItem>
        <AACollapseItem title="黄金" name="3">
          很好
        </AACollapseItem>
      </AACollapse>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Collapse 折叠面板
</route>
