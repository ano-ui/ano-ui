<script setup lang="ts">
const checked = ref(true)
</script>

<template>
  <UBasePage>
    <div class="p-4">
      Basic
    </div>
    <div flex="~ gap2 wrap" items-center px-4>
      <ASwitch v-model="checked" />
    </div>
    <div class="p-4">
      <ACollapseTransition :show="checked">
        宿建德江移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。
      </ACollapseTransition>
    </div>
  </UBasePage>
</template>

<route lang="yaml">
style:
  navigationBarTitleText: CollapseTransition 折叠过渡
</route>
