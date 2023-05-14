<script setup lang="ts">

</script>

<template>
  <UBasePage>
    <div class="p-4">
      Basic
    </div>
    <ACollapse>
      <ACollapseItem title="Hi" name="1">
        今天晚饭吃什么？
      </ACollapseItem>
      <ACollapseItem title="May be?" name="2">
        小龙虾
      </ACollapseItem>
    </ACollapse>

    <div class="p-4">
      Accordion
    </div>
    <ACollapse accordion>
      <ACollapseItem title="Francis Bacon's saying" name="1">
        有些书应该细细品味，有些书应该吞噬，但只有少数书应该被细嚼慢咽、彻底消化。
      </ACollapseItem>
      <ACollapseItem title="Francis Bacon's saying" name="2">
        如果一个人以确定性开始，他将以怀疑结束；但如果他满足于以怀疑开始，他将以确定结束。
      </ACollapseItem>
    </ACollapse>

    <div class="p-4">
      Custom
    </div>
    <ACollapse accordion>
      <ACollapseItem icon="i-tabler-carrot" title="Title" value="Content" label="Description" name="0">
        这是一个内容
      </ACollapseItem>
      <ACollapseItem title="Slots" name="1">
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
      </ACollapseItem>
    </ACollapse>

    <div class="p-4">
      Disabled
    </div>
    <ACollapse accordion>
      <ACollapseItem title="青铜" name="1">
        可以
      </ACollapseItem>
      <ACollapseItem disabled title="白银" name="2">
        很好
      </ACollapseItem>
      <ACollapseItem title="黄金" name="3">
        很好
      </ACollapseItem>
    </ACollapse>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Collapse 折叠面板
</route>
