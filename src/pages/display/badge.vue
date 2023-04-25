<script setup lang="ts">
</script>

<template>
  <UBasePage>
    <div class="pb-safe">
      <div class="p-4">
        Basic
      </div>
      <div px-4 items-center flex="~ gap6 wrap">
        <ABadge :value="16" :max="15">
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge dot>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
      </div>
      <div class="p-4">
        Color
      </div>
      <div px-4 items-center flex="~ gap6 wrap">
        <ABadge type="default" dot>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge type="danger" dot>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge type="info" dot>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge type="success" dot>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge type="warning" dot>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
      </div>
      <div class="p-4">
        Processing
      </div>
      <div px-4 items-center flex="~ gap6 wrap">
        <ABadge dot processing>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge :value="20" processing>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge dot type="info" processing>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
      </div>
      <div class="p-4">
        Custom Value
      </div>
      <div px-4 items-center flex="~ gap6 wrap">
        <ABadge value="你">
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge value="在">
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
        </ABadge>
        <ABadge type="info" processing>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
          <template #value>
            哪里
          </template>
        </ABadge>
        <ABadge type="info" processing>
          <div class="w-12 h-12 bg-gray3 rounded-lg" />
          <template #value>
            <div class="i-tabler-cloud-question" />
          </template>
        </ABadge>
      </div>
      <!-- TODO: custom color -->
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: Badge 标记
  </route>
