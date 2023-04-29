<script setup lang="ts">

</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Basic
      </div>
      <AACollapseItem>
        <div class="h-20 bg-amber" />
      </AACollapseItem>

      <div class="p-4">
        Custom
      </div>
      <div flex="~ gap2 wrap" items-center px-4>
        <AACollapse>
          AACollapse
        </AACollapse>
      </div>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: ACollapse
</route>
