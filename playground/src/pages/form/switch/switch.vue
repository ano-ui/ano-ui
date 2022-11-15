<script setup lang="ts">
const checked = ref(false)
</script>

<template>
  <UBasePage>
    <div class="p-2 pb-safe">
      <div class="p-2">
        Type
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch v-model="checked" />
        <ASwitch v-model="checked" color="success" />
        <ASwitch v-model="checked" color="info" />
        <ASwitch v-model="checked" color="warning" />
        <ASwitch v-model="checked" color="danger" />
      </div>

      <div class="p-2">
        Size
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch>
          Default
        </ASwitch>
        <ASwitch color="success" size="xs">
          Mini
        </ASwitch>
        <ASwitch color="info" size="sm">
          Small
        </ASwitch>
        <ASwitch color="warning" size="md">
          Medium
        </ASwitch>
        <ASwitch color="danger" size="lg">
          Large
        </ASwitch>
      </div>
      <div class="p-2">
        Custom
      </div>
      <div p-2 flex="~ gap2 wrap" items-center>
        <ASwitch icon="i-carbon-palm-tree" />
      </div>
    </div>
  </UBasePage>
</template>
