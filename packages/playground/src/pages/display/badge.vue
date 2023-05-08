<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="p-4">
      基础用法
    </div>
    <div items-center px-4 flex="~ gap6 wrap">
      <ABadge :value="16" :max="15">
        <div class="rounded-lg h-12 w-12 bg-gray3" />
      </ABadge>
      <ABadge dot>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
    </div>
    <div class="p-4">
      自定义类型
    </div>
    <div items-center px-4 flex="~ gap6 wrap">
      <ABadge dot>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge type="danger" dot>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge type="info" dot>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge type="success" dot>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge type="warning" dot>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
    </div>
    <div class="p-4">
      Processing
    </div>
    <div items-center px-4 flex="~ gap6 wrap">
      <ABadge dot processing>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge :value="20" processing>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge dot type="info" processing>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
    </div>
    <div class="p-4">
      自定义值
    </div>
    <div items-center px-4 flex="~ gap6 wrap">
      <ABadge value="你">
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge value="在">
        <div class="h-12 w-12 rounded-lg bg-gray3" />
      </ABadge>
      <ABadge type="info" processing>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
        <template #value>
          哪里
        </template>
      </ABadge>
      <ABadge type="info" processing>
        <div class="h-12 w-12 rounded-lg bg-gray3" />
        <template #value>
          <div class="i-tabler-cloud-question" />
        </template>
      </ABadge>
    </div>
    <!-- TODO: custom color -->
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Badge 标记
  </route>
